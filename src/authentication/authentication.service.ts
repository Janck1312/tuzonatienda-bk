import {
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { BcryptService } from 'src/exchange/services/BcryptService';
import { JWTService } from 'src/exchange/services/JWTService';
import { PrismaService } from 'src/exchange/services/PrismaService';
import { StoreService } from 'src/store/store.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthenticationService {
    constructor(
        private readonly usersService: UsersService,
        private readonly prismaService: PrismaService,
        private readonly jwtService: JWTService,
        private readonly storeService: StoreService,
    ) {}

    async login(loginDto) {
        try {
            loginDto.email;
            loginDto.password;
            const user = await this.usersService.findByEmail(loginDto.email);
            if (!user) {
                throw new Error('User not found 404');
            }

            if (!BcryptService.compareHash(loginDto.password, user.password)) {
                throw new Error('Invalid credentials 401');
            }

            return {
                token: this.generateJWT({
                    id: user.id,
                    email: user.email,
                    identification: user.identification,
                }),
                refreshToken: this.jwtService.generateRefreshToken({
                    id: user.id,
                    email: user.email,
                    identification: user.identification,
                    type: 'refresh',
                }),
                user: { ...user },
            };
        } catch (error) {
            if (error.message === 'User not found 404') {
                throw new NotFoundException(error);
            }

            if (error.message === 'Invalid credentials 401') {
                throw new UnauthorizedException(error);
            }
        }
    }

    async signUp(signUpDto) {
        try {
            const user = await this.usersService.create({
                ...signUpDto.user,
                password: BcryptService.makeHash(signUpDto.user.password),
            });
            let store = {};
            if (!user) throw new Error('Error creating user');
            if (signUpDto.store) {
                store = await this.storeService.create({
                    ...signUpDto.store,
                    ownerId: user.id,
                });
            }
            return {
                user,
                store,
            };
        } catch (error) {}
    }

    async updatejwtToken(updateJwtTokenDto) {
        const payload = this.jwtService.validateToken(
            updateJwtTokenDto.refreshToken,
        );

        if(!payload || payload.type !== 'refresh') {
            throw new UnauthorizedException('Invalid refresh token');
        }

        const user = await this.prismaService.users.findFirst({
            where: {
                id: payload.id,
                email: payload.email,
                identification: payload.identification,
            },
        });
        if (!user) throw new NotFoundException('User not found.');
        return this.generateJWT({
            id: payload.id,
            email: payload.email,
            identification: payload.identification,
        });
    }

    private async generateJWT(payload) {
        return this.jwtService.generateToken(payload);
    }
}

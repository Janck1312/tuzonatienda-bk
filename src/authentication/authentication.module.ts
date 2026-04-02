import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/exchange/services/PrismaService';
import { JWTService } from 'src/exchange/services/JWTService';
import { StoreService } from 'src/store/store.service';

@Module({
    controllers: [AuthenticationController],
    providers: [
        AuthenticationService,
        UsersService,
        PrismaService,
        JWTService,
        StoreService,
    ],
})
export class AuthenticationModule {}

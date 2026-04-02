import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
import { TPayloadRefreshToken } from '../types/TPayloadRefreshToken';

@Injectable()
export class JWTService {
    constructor(public configService: ConfigService) {}

    generateToken(payload: Object): string {
        try {
            return jwt.sign(
                JSON.stringify(payload),
                this.configService.get('JWT_SECRET')!,
                { expiresIn: this.configService.get('JWT_AUTH_EXPIRES_IN')! },
            );
        } catch (error) {
            throw new Error('Error generating token: ' + error.message);
        }
    }

    /**
     *
     * @param {TPayloadRefreshToken} payload
     * @returns {String} Refresh token with a longer expiration time (e.g., 7 days)
     */
    generateRefreshToken(payload: TPayloadRefreshToken): string {
        try {
            return jwt.sign(
                JSON.stringify(payload),
                this.configService.get('JWT_SECRET')!,
                {
                    expiresIn: this.configService.get(
                        'JWT_REFRESH_EXPIRES_IN',
                    )!,
                },
            );
        } catch (error) {
            throw new Error('Error generating refresh token: ' + error.message);
        }
    }

    validateToken(token: string): any {
        try {
            return jwt.verify(token, this.configService.get('JWT_SECRET')!);
        } catch (error) {
            throw new Error('Invalid token');
        }
    }
}

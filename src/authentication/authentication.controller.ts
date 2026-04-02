import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {
    constructor(
        private readonly authenticationService: AuthenticationService,
    ) {}

    @Post('login')
    async login(@Body() loginDto) {
        return this.authenticationService.login(loginDto);
    }

    @Post('signup')
    async signUp(@Body() signUpDto) {
        return this.authenticationService.signUp(signUpDto);
    }

    @Post('refresh-jwt')
    async updateJwtToken(@Body() updateJwtTokenDto) {
        return this.authenticationService.updatejwtToken(updateJwtTokenDto);
    }
}

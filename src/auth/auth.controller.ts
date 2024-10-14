import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  singUp(@Body() dto: any) {
    console.log(dto);

    return this.authService.signup();
  }

  @Post('signin')
  signIn() {
    return this.authService.login();
  }
}

import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  singUp() {
    return this.authService.signup();
  }

  @Post('signin')
  signIn() {
    return this.authService.login();
  }
}

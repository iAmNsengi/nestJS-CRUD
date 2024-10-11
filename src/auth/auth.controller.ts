import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  singUp() {
    return 'I am sign up route';
  }

  @Post('signin')
  signIn() {
    return 'I am sign up';
  }
}

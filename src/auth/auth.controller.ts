import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  singUp(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  signIn() {
    return this.authService.login();
  }
}

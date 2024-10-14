import { Controller, Post, Body, ParseIntPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  singUp(
    @Body('username') email: string,
    @Body('password', ParseIntPipe) password: string,
  ) {
    console.log(email, password);

    return this.authService.signup();
  }

  @Post('signin')
  signIn() {
    return this.authService.login();
  }
}

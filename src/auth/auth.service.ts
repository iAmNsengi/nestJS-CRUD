import { Injectable } from '@nestjs/common';
// import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  login() {
    return { msg: 'I am login' };
  }
  async signup(dto: AuthDto) {
    // generate password hash
    const hash = await argon.hash(dto.password);

    // save the new user in the db
    const newUser = await this.prisma.user.create({
      data: {
        username: dto.username,
        password: hash,
      },
    });

    // return dtothe saved user
    return newUser;
  }
}

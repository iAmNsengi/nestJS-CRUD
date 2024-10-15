import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

const loginError = () => {
  throw new ForbiddenException('Invalid Credentials');
};

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async login(dto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        username: dto.username,
      },
    });
    if (!user) loginError();
    const passwordMatches = await argon.verify(user.password, dto.password);
    if (!passwordMatches) loginError();

    delete user.password;
    return user;
  }

  async signup(dto: AuthDto) {
    const hash = await argon.hash(dto.password);

    try {
      const newUser = await this.prisma.user.create({
        data: {
          username: dto.username,
          password: hash,
        },
      });
      delete newUser.password;
      return newUser;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError)
        if (error.code === 'P2002')
          throw new ForbiddenException('Credentials taken');
    }
  }
  async signToken(userId: number, username: string): Promise<string> {
    const payload = {
      sub: userId,
      username,
    };
    return this.jwt.sign(payload, {
      expiresIn: '3h',
      secret: this.config.get('JWT_SECRET'),
    });
  }
}

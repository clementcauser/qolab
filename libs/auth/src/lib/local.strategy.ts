import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { UserModel } from '@qolab/users';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(
    email: string,
    password: string
  ): Promise<Omit<UserModel, 'password'>> {
    const user = await this.authService.validateUser(email, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}

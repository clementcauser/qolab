import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserModel, UsersService } from '@qolab/users';
import * as bcrypt from 'bcrypt';
import { SignupInput } from './dto';
import { LoginInput } from './dto/login.input';
import { LoginOutput } from './dto/login.output';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(
    email: string,
    password: string
  ): Promise<Omit<UserModel, 'password'> | null> {
    const user = await this.usersService.findOneByEmail(email);

    const valid = await bcrypt.compare(password, user.password);

    if (user && valid) {
      const result: Omit<UserModel, 'password'> = {
        email: user.email,
        _id: user._id,
        username: user.username,
      };

      return result;
    }

    throw new UnauthorizedException('Invalid credentials');
  }

  async login(loginInput: LoginInput): Promise<LoginOutput> {
    const { email, password } = loginInput;

    const user = await this.validateUser(email, password);

    return {
      access_token: this.jwtService.sign({
        email: user.email,
        sub: user._id,
      }),
      user,
    };
  }

  async signup(signupInput: SignupInput) {
    const password = await bcrypt.hash(signupInput.password, 10);

    return this.usersService.create({ ...signupInput, password });
  }
}

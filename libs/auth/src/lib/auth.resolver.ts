import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserModel } from '@qolab/users';
import { AuthService } from './auth.service';
import { SignupInput } from './dto';
import { LoginOutput } from './dto/login.output';
import { LoginInput } from './dto/login.input';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginOutput)
  login(@Args('loginInput') loginInput: LoginInput) {
    return this.authService.login(loginInput);
  }

  @Mutation(() => UserModel)
  signup(@Args('signupInput') signupInput: SignupInput) {
    return this.authService.signup(signupInput);
  }
}

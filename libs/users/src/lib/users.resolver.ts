import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserModel } from './user.model';
import { UsersService } from './users.service';

@Resolver(() => UserModel)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [UserModel], { name: 'users' })
  // @UseGuards(JwtAuthGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => UserModel, { name: 'userByEmail' })
  findUserByEmail(@Args('email') email: string) {
    return this.usersService.findOneByEmail(email);
  }
}

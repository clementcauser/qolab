import { UseGuards } from '@nestjs/common';
import { Float, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser, GqlAuthGuard, JwtToken } from '@qolab/auth';

@Resolver()
export class CoreResolver {
  @Query(() => Float)
  @UseGuards(GqlAuthGuard)
  uptime(@CurrentUser() user: JwtToken) {
    console.log(
      '🚀 ~ file: core.resolver.ts ~ line 10 ~ CoreResolver ~ uptime ~ user',
      user
    );
    return process.uptime();
  }
}

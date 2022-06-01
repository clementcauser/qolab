import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '@qolab/users';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { GqlAuthGuard } from './guards';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      signOptions: {
        expiresIn: '7d',
      },
      secret: process.env.JWT_SECRET,
    }),
  ],
  providers: [AuthService, AuthResolver, JwtStrategy, GqlAuthGuard],
  exports: [AuthService],
})
export class AuthModule {}

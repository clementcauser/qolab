import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserSchema } from './models/user.model';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }]),
  ],
  providers: [UsersService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}

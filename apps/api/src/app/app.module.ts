import { Module } from '@nestjs/common';
import { AuthModule } from '@qolab/auth';
import { CoreModule } from '@qolab/core';
import { UsersModule } from '@qolab/users';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CoreModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

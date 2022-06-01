import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { configuration } from './config';
import { CoreResolver } from './core.resolver';
import { validationSchema } from './validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'apps/api/src/schema.gql'),
      sortSchema: true,
      playground: process.env.NODE_ENV === 'development',
    }),
    MongooseModule.forRoot(configuration().mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  ],
  providers: [CoreResolver],
})
export class CoreModule {}

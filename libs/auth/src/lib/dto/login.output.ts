import { Field, ObjectType } from '@nestjs/graphql';
import { UserModelWithoutPassword } from '@qolab/users';

@ObjectType()
export class LoginOutput {
  @Field(() => String)
  access_token: string;

  @Field(() => UserModelWithoutPassword)
  user: UserModelWithoutPassword;
}

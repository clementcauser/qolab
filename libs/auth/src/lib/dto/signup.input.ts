import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SignupInput {
  @IsEmail()
  @IsNotEmpty()
  @Field({ nullable: false })
  email: string;

  @IsNotEmpty()
  @MinLength(4)
  @IsString()
  @Field({ nullable: true })
  username: string;

  @IsNotEmpty()
  @MinLength(6)
  @IsString()
  @Field({ nullable: false })
  password: string;
}

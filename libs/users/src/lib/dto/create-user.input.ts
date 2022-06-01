import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserInput {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(4)
  @IsString()
  username: string;

  @IsNotEmpty()
  @MinLength(6)
  @IsString()
  password: string;
}

import { Field, ObjectType, OmitType, registerEnumType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { UserRole } from '../enums/user-roles.enum';

registerEnumType(UserRole, { name: 'UserRole' });

@ObjectType()
@Schema({ collection: 'users' })
export class UserModel {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop({ required: true, unique: true })
  email: string;

  @Field({ nullable: true })
  @Prop({ required: false, unique: true })
  username?: string;

  @Prop({
    required: true,
    min: 6,
  })
  password: string;

  @Field(() => [UserRole])
  @Prop({ type: [String], default: [UserRole.REGULAR], required: false })
  roles: UserRole[];
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
export type UserDocument = UserModel & Document;

@ObjectType()
export class UserModelWithoutPassword extends OmitType(UserModel, [
  'password',
] as const) {}

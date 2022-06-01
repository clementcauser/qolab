import { Field, ObjectType, OmitType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

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
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
export type UserDocument = UserModel & Document;

@ObjectType()
export class UserModelWithoutPassword extends OmitType(UserModel, [
  'password',
] as const) {}

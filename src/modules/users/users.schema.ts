import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export type UserDocument = User & Document;

@Schema()
export class User {
  @IsString()
  @Prop()
  name: string;

  @IsString()
  @Prop({ unique: true })
  email: string;

  @IsString()
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

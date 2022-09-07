import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export type SeriesDocument = Series & Document;

@Schema()
export class Series {
  @IsString()
  @Prop()
  name: string;

  @IsString()
  @Prop()
  url: string;

  @IsString()
  @Prop()
  trailer: string;

  @IsString()
  @Prop()
  descreption: string;

  @IsString()
  @Prop()
  isActive: boolean;
}

export const SeriesSchema = SchemaFactory.createForClass(Series);

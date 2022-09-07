import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export type SeasonDocument = Season & Document;

@Schema()
export class Season {
  @IsString()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Series' })
  seriesId: string;

  @IsString()
  @Prop()
  name: string;

  @IsString()
  @Prop()
  image: string;

  @IsString()
  @Prop()
  isActive: boolean;
}

export const SeasonSchema = SchemaFactory.createForClass(Season);

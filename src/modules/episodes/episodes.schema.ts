import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type EpisodesDocument = Episodes & Document;
import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

@Schema()
export class Episodes {
  @IsString()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Season' })
  seasonId: string;

  @IsString()
  @Prop()
  name: string;

  @IsString()
  @Prop()
  image: string;

  @IsString()
  @Prop()
  descreption: string;
}

export const EpisodesSchema = SchemaFactory.createForClass(Episodes);

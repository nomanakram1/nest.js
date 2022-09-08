import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export type SeriesDocument = Series & Document;

@Schema()
export class Series {
  @ApiProperty()
  @IsString()
  @Prop()
  name: string;

  @IsString()
  @ApiProperty()
  @Prop()
  url: string;

  @IsString()
  @ApiProperty()
  @Prop()
  trailer: string;

  @IsString()
  @ApiProperty()
  @Prop()
  descreption: string;

  @IsString()
  @Prop()
  isActive: boolean;
}

export const SeriesSchema = SchemaFactory.createForClass(Series);

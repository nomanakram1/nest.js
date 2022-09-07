import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SeriesDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  url: string;

  @IsString()
  @IsOptional()
  trailer: string;

  @IsString()
  @IsOptional()
  descreption: string;

  @IsString()
  @IsOptional()
  isActive: boolean;
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SeasonService } from './season.service';
import { Season } from './season.schema';
import { get } from 'http';

@Controller('seasons')
export class SeasonController {
  constructor(private seasonServieseData: SeasonService) {}

  @Post()
  create(@Body() body: Season) {
    return this.seasonServieseData.create(body);
  }

  @Get()
  findAll() {
    return this.seasonServieseData.findAll();
  }

  @Patch(':id')
  update(@Body() body: Season, @Param('id') id: string) {
    return this.seasonServieseData.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.seasonServieseData.delete(id);
  }

  @Get('byId/:id')
  getById(@Param('id') id: string) {
    return this.seasonServieseData.getById(id);
  }

  @Get('aggriSeason')
  getAggriSea() {
    return this.seasonServieseData.getAggriSeason();
  }
}

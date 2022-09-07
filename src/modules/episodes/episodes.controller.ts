import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { Episodes } from './episodes.schema';

@Controller('episodes')
export class EpisodesController {
  constructor(private episodesServieseData: EpisodesService) {}
  @Post()
  episodesPostData(@Body() body: Episodes) {
    return this.episodesServieseData.create(body);
  }

  @Get()
  test() {
    return this.episodesServieseData.findAll();
  }

  @Patch(':id')
  update(@Body() body: Episodes, @Param('id') id: string) {
    return this.episodesServieseData.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.episodesServieseData.delete(id);
  }

  @Get('byId/:id')
  getById(@Param('id') id: string) {
    return this.episodesServieseData.getById(id);
  }

  @Get('aggriFromEpi')
  getAggri() {
    return this.episodesServieseData.getAggriEpi();
  }
}

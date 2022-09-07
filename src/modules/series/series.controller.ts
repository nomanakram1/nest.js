import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SeriesService } from './series.service';
import { Series } from './series.schema';
import { SeriesDto } from './series.dto';

@Controller('series')
export class SeriesController {
  constructor(private seriesServieseData: SeriesService) {}
  @Post()
  seriesPostData(@Body() body: Series) {
    return this.seriesServieseData.create(body);
  }

  @Get()
  test() {
    return this.seriesServieseData.findAll();
  }

  @Patch(':id')
  update(@Body() body: Partial<Series>, @Param('id') id: string) {
    return this.seriesServieseData.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.seriesServieseData.delete(id);
  }

  @Get('byId/:id')
  getById(@Param('id') id: string) {
    return this.seriesServieseData.getById(id);
  }

  @Get('/aggri')
  aggriSeries() {
    return this.seriesServieseData.aggrigationSeries();
  }
}

import { Module } from '@nestjs/common';
import { EpisodesController } from './episodes.controller';
import { EpisodesService } from './episodes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Episodes, EpisodesSchema } from './episodes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Episodes.name, schema: EpisodesSchema },
    ]),
  ],
  controllers: [EpisodesController],
  providers: [EpisodesService],
})
export class EpisodesModule {}

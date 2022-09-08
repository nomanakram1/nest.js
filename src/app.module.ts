import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeriesModule } from './modules/series/series.module';
import { SeasonModule } from './modules/season/season.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EpisodesModule } from './modules/episodes/episodes.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    SeriesModule,
    SeasonModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    EpisodesModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Episodes, EpisodesDocument } from './episodes.schema';

@Injectable()
export class EpisodesService {
  constructor(
    @InjectModel(Episodes.name) private episodesModel: Model<EpisodesDocument>,
  ) {}
  async create(createEpisodesDto: Episodes): Promise<EpisodesDocument> {
    const createdEpisodes = new this.episodesModel(createEpisodesDto);
    return createdEpisodes.save();
  }

  async findAll(): Promise<EpisodesDocument[]> {
    return this.episodesModel.find().exec();
  }

  async update(
    id: string,
    createEpisodesDto: Episodes,
  ): Promise<EpisodesDocument> {
    const createdEpisodes = await this.episodesModel.findByIdAndUpdate(
      { _id: id },
      createEpisodesDto,
    );
    return createdEpisodes;
  }

  async delete(id: string): Promise<EpisodesDocument> {
    const deleteEpisodes = await this.episodesModel.findOneAndRemove({
      _id: id,
    });
    return deleteEpisodes;
  }

  async getById(id: string): Promise<EpisodesDocument> {
    const getByIdEpisodes = await this.episodesModel.findById(id);
    return getByIdEpisodes;
  }

  async getAggriEpi(): Promise<EpisodesDocument[]> {
    return this.episodesModel.aggregate([
      {
        $lookup: {
          from: 'seasons',
          let: { questId: '$seasonId' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ['$$questId', '$_id'],
                },
              },
            },
            {
              $lookup: {
                from: 'series',
                localField: 'seriesId',
                foreignField: '_id',
                as: 'series',
              },
            },
          ],
          as: 'season',
        },
      },
    ]);
  }
}

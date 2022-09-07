import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Season, SeasonDocument } from './season.schema';

@Injectable()
export class SeasonService {
  constructor(
    @InjectModel(Season.name) private seasonModel: Model<SeasonDocument>,
  ) {}

  async create(createSeasonDto: Season): Promise<SeasonDocument> {
    const createdSeason = new this.seasonModel(createSeasonDto);
    return createdSeason.save();
  }

  async findAll(): Promise<Season[]> {
    return this.seasonModel.find().exec();
  }

  async update(id: string, createseasonDto: Season): Promise<SeasonDocument> {
    const updateSeason = await this.seasonModel.findByIdAndUpdate(
      { _id: id },
      createseasonDto,
    );
    return updateSeason;
  }

  async delete(id: string): Promise<SeasonDocument> {
    const deleteSeries = await this.seasonModel.findOneAndRemove({ _id: id });
    return deleteSeries;
  }

  async getById(id: string): Promise<SeasonDocument> {
    const getByIdSeries = await this.seasonModel.findById(id);
    return getByIdSeries;
  }

  async getAggriSeason(): Promise<Season[]> {
    return this.seasonModel.aggregate([
      {
        $lookup: {
          from: 'episodes',
          localField: '_id',
          foreignField: 'seasonId',
          as: 'test',
        },
      },
    ]);
  }
}

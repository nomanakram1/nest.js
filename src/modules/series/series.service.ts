import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Series, SeriesDocument } from './series.schema';
import { SeriesDto } from './series.dto';

@Injectable()
export class SeriesService {
  constructor(
    @InjectModel(Series.name) private seriesModel: Model<SeriesDocument>,
  ) {}

  async create(createSeriesDto: Series): Promise<SeriesDocument> {
    const createdSeries = new this.seriesModel(createSeriesDto);
    return createdSeries.save();
  }

  async findAll(): Promise<SeriesDocument[]> {
    return this.seriesModel.find().exec();
  }

  async update(
    id: string,
    createSeriesDto: Partial<Series>,
  ): Promise<SeriesDocument> {
    const createdSeries = await this.seriesModel.findByIdAndUpdate(
      { _id: id },
      createSeriesDto,
    );
    return createdSeries;
  }

  async delete(id: string): Promise<SeriesDocument> {
    const deleteSeries = await this.seriesModel.findOneAndRemove({ _id: id });
    return deleteSeries;
  }

  async getById(id: string): Promise<SeriesDocument> {
    const getByIdSeries = await this.seriesModel.findById(id);
    return getByIdSeries;
  }

  async aggrigationSeries(): Promise<SeriesDocument[]> {
    // return this.seriesModel.aggregate([
    //   {
    //     $lookup: {
    //       from: 'seasons',
    //       localField: '_id',
    //       foreignField: 'seriesId',
    //       as: 'seas',
    //     },
    //   },
    // ]);
    return this.seriesModel.aggregate([
      {
        $lookup: {
          from: 'seasons',
          let: { baseId: '$_id' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ['$$baseId', '$seriesId'],
                },
              },
            },
            {
              $lookup: {
                from: 'episodes',
                localField: '_id',
                foreignField: 'seasonId',
                as: 'episodes',
              },
            },
          ],
          as: 'season',
        },
      },
    ]);
  }
}

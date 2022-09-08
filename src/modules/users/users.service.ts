import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';
const bcrypt = require('bcrypt');

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: User): Promise<UserDocument> {
    const salt = await bcrypt.genSalt(6);
    const hashed = await bcrypt.hash(createUserDto.password, salt);
    createUserDto.password = hashed;
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }

  async getByEmail(email: string): Promise<UserDocument> {
    const getByemail = await this.userModel.findOne({ email: email });
    return getByemail;
  }
}

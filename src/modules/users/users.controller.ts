import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { User } from './users.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userData: UsersService) {}
  @Post()
  seriesPostData(@Body() body: User) {
    return this.userData.create(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  test() {
    return this.userData.findAll();
  }

  @Get('byEmail/:email')
  getById(@Param('email') email: string) {
    return this.userData.getByEmail(email);
  }
}

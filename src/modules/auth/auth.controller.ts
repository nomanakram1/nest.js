import { Body, Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() req) {
    const valid = await this.authService.validateUser(req.username, req.pass);
    if (valid) {
      return this.authService.login(req);
    } else {
      return 'Error';
    }
  }

  @Get()
  async ggg() {
    return 'jhjhhj';
  }
}

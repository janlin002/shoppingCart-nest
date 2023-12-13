import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 全部使用者資料
  @Get()
  async findAllUsers() {}

  // 單一使用者資料
  @Post('/:id')
  async findUserById(@Param('id') id: string) {}
}

import { Controller, Get, Post, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { UserService } from './user.service';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: '取得全部使用者資料' })
  async findAllUsers() {
    return await this.userService.findAllUsers();
  }

  @Post('/:id')
  @ApiOperation({ summary: '取得全單一使用者資料' })
  async findUserById(@Param('id') user_id: string) {
    return await this.userService.findUserById(user_id);
  }
}

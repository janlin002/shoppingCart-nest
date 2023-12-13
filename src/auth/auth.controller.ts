import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { AuthBasicInfo } from './dto/authBasicInfo.dto';

@Controller('user')
@ApiTags('user')
export class AuthController {
  constructor(private readonly userService: AuthService) {}

  // 登入
  @Post('login')
  async login(@Body() userBasicInfo: AuthBasicInfo) {
    return await this.userService.login(userBasicInfo);
  }

  // 登出
  @Post('logout')
  async logout() {}

  // 忘記密碼

  // 重設密碼

  // 註冊
  @Post('register')
  async register(@Body() userBasicInfo: AuthBasicInfo) {
    return await this.userService.register(userBasicInfo);
  }

  // oauth 登入
}

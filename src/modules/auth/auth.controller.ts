import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { AuthBasicInfo } from './dto/authBasicInfo.dto';

@Controller('user')
@ApiTags('user')
export class AuthController {
  constructor(private readonly userService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: '登入' })
  async login(@Body() userBasicInfo: AuthBasicInfo) {
    return await this.userService.login(userBasicInfo);
  }

  @Post('logout')
  @ApiOperation({ summary: '登出' })
  async logout() {}

  @Post('forgetPassword')
  @ApiOperation({ summary: '忘記密碼' })
  async forgetPassword() {}

  @Post('resetPassword')
  @ApiOperation({ summary: '重設密碼' })
  async resetPassword() {}

  @Post('register')
  @ApiOperation({ summary: '註冊' })
  async register(@Body() userBasicInfo: AuthBasicInfo) {
    return await this.userService.register(userBasicInfo);
  }

  // oauth 登入
}

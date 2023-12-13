import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

import { UserEntity } from 'src/entities/user-entity';
import { AuthBasicInfo } from './dto/authBasicInfo.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  // 登入
  async login(userBasicInfo: AuthBasicInfo) {
    const { user_id, password } = userBasicInfo;

    const found = await this.usersRepository.findOne({
      where: { user_id },
    });

    if (!found) {
      throw new HttpException('該使用者不存在', HttpStatus.NOT_FOUND);
    }

    const isSameUser = await bcrypt.compare(password, found.password);

    if (!isSameUser) {
      throw new HttpException('密碼錯誤，請在嘗試一次', HttpStatus.BAD_REQUEST);
    }

    const jwt_token = this.jwtService.signAsync(userBasicInfo);

    return {
      status: HttpStatus.OK,
      message: '登入成功!',
      access_token: jwt_token,
    };
  }

  // 註冊
  async register(userBasicInfo: AuthBasicInfo) {
    const { user_id, password } = userBasicInfo;

    const found = this.usersRepository.findOne({
      where: { user_id },
    });

    if (found) {
      throw new HttpException('該使用者已存在', HttpStatus.CONFLICT);
    }

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    try {
      this.usersRepository.save({
        user_id,
        password: hashPassword,
      });

      return {
        status: HttpStatus.OK,
        message: '註冊成功!',
      };
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

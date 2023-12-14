import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from 'src/entities/user-entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async findAllUsers() {
    return await this.usersRepository.find();
  }

  async findUserById(user_id: string) {
    return await this.usersRepository.findOne({
      where: { user_id },
    });
  }
}

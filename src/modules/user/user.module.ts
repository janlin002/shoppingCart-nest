import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from 'src/entities/user-entity';
import { CartItemEntity } from 'src/entities/cartItem-entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, CartItemEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

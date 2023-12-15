import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { UserEntity } from '../../entities/user-entity';
import { ProductDetailEntity } from 'src/entities/productDetail.entity';
import { ProductCategoryEntity } from 'src/entities/productCategory.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      ProductDetailEntity,
      ProductCategoryEntity,
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}

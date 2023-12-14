import { Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { ProductService } from './product.service';

@Controller('product')
@ApiTags('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // 取得單一商品資料
  @Post('/:id')
  @ApiOperation({ summary: '取得單一商品資料' })
  async findProductById() {}
}

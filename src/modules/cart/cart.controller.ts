import { Controller, Delete, Post, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { CartService } from './cart.service';

@Controller('cart')
@ApiTags('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('/addToCart')
  @ApiOperation({ summary: '加到購物車' })
  async addToCart() {}

  @Delete('/removeFromCart')
  @ApiOperation({ summary: '從購物車移除' })
  async removeFromCart() {}

  @Get('/cartContent')
  @ApiOperation({ summary: '購物車內容' })
  async cartContent() {}
}

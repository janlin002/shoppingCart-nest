import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CartItemEntity } from 'src/entities/cartItem-entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartItemEntity)
    private cartRepository: Repository<CartItemEntity>,
  ) {}
  async addToCart() {}

  async removeFromCart() {}

  async cartContent() {}
}

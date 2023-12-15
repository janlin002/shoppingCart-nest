import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import { ProductCategoryEntity } from './productCategory.entity';
import { ProductDiscountEntity } from './productDiscount-entity';
import { ShoppingCartEntity } from './shoppingCart.entity';

@Entity()
export class ProductDetailEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  @OneToMany(
    () => ProductCategoryEntity,
    (productCategory) => productCategory.id,
  )
  // @JoinColumn()
  category_id: number;

  @Column()
  // @OneToMany(
  //   () => ProductDiscountEntity,
  //   (productDiscount) => productDiscount.id,
  // )
  discount_id: ProductCategoryEntity[];

  @Column()
  created_id: Date;

  @Column()
  modified_at: Date;

  @Column()
  deleted_at: Date;

  @Column()
  desc: string;

  @Column()
  quantity: number;
}

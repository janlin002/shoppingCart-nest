import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

import { ProductDetailEntity } from './productDetail.entity';
import { ProductEntity } from './product-entity';

@Entity()
export class ProductInventoryEntity {
  @PrimaryGeneratedColumn()
  // @OneToOne(
  //   () => ProductDetailEntity,
  //   (productDetail) => productDetail.inventory_id,
  // )
  id: string;

  @OneToOne(() => ProductEntity, (product) => product.id)
  @JoinColumn()
  product: ProductEntity;

  @Column()
  quantity: number;

  @Column()
  created_at: Date;

  @Column()
  deleted_at: Date;

  @Column()
  modified_at: Date;
}

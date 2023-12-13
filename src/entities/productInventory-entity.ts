import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductDetailEntity } from './productDetail.entity';

@Entity()
export class ProductInventoryEntity {
  @PrimaryGeneratedColumn('uuid')
  @OneToOne(
    () => ProductDetailEntity,
    (productDetail) => productDetail.inventory_id,
  )
  id: number;

  @Column()
  quantity: number;

  @Column()
  created_at: Date;

  @Column()
  deleted_at: Date;

  @Column()
  modified_at: Date;
}

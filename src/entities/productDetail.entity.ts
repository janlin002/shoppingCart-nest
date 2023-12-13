import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductCategoryEntity } from './productCategory.entity';
import { ProductDiscountEntity } from './productDiscount-entity';

@Entity()
export class ProductDetailEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  @OneToOne(() => ProductCategoryEntity)
  category_id: number;

  @Column()
  inventory_id: string;

  @Column()
  @OneToOne(() => ProductDiscountEntity)
  discount_id: number;

  @Column()
  created_id: Date;

  @Column()
  modified_at: Date;

  @Column()
  deleted_at: Date;
}

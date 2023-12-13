import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { ProductEntity } from './product-entity';

@Entity()
export class CartItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  session_id: string;

  @Column()
  @OneToOne(() => ProductEntity)
  product_id: string;

  @Column()
  quantity: string;

  @Column()
  create_at: Date;

  @Column()
  modified_at: Date;
}

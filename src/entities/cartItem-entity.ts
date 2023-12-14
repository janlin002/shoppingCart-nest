import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { ProductEntity } from './product-entity';

@Entity()
export class CartItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  session_id: string;

  @Column()
  @ManyToOne(() => ProductEntity, (product) => product.id)
  product_id: string;

  @Column()
  quantity: string;

  @DeleteDateColumn()
  create_at: Date;

  @DeleteDateColumn()
  modified_at: Date;
}

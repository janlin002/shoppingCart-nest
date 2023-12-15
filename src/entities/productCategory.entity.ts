import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

import { ProductDetailEntity } from './productDetail.entity';

@Entity()
export class ProductCategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  category_id: ProductDetailEntity;

  @Column()
  name: string;

  @Column()
  desc: string;

  @Column()
  created_id: Date;

  @Column()
  modified_at: Date;

  @Column()
  deleted_at: Date;
}

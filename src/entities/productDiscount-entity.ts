import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductDiscountEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  desc: string;

  @Column()
  discount_percent: number;

  @Column()
  active: boolean;

  @Column()
  created_id: Date;

  @Column()
  modified_at: Date;

  @Column()
  deleted_at: Date;
}

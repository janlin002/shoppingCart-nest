import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductCategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

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

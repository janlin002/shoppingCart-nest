import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductInventoryEntity } from './productInventory-entity';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  @OneToOne(() => ProductInventoryEntity)
  id: number;

  @Column()
  name: string;

  @Column()
  desc: string;

  @Column()
  created_id: Date;

  @Column()
  modified_at: Date;
}

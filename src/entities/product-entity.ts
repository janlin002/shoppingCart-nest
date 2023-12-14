import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductInventoryEntity } from './productInventory-entity';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn()
  // @OneToMany(() => ProductInventoryEntity, (inventory) => inventory.id)
  // @OneToOne(() => ProductInventoryEntity)
  id: string;

  @Column()
  name: string;

  @Column()
  desc: string;

  @Column()
  created_id: Date;

  @Column()
  modified_at: Date;
}

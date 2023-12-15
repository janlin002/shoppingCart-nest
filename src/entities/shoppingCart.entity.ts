import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from './user-entity';
import { ProductDetailEntity } from './productDetail.entity';

// 所有訂單資料
@Entity()
export class ShoppingCartEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  @ManyToOne(() => UserEntity, (user) => user.id)
  user_id: UserEntity;

  @Column()
  create_at: Date;

  @Column()
  modified_at: Date;

  @Column()
  @ManyToOne(() => ProductDetailEntity, (productDetail) => productDetail.id)
  order_id: string;
}

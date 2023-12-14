import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { UserEntity } from './user-entity';

// 所有訂單資料
@Entity()
export class ShoppingSessionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  @OneToOne(() => UserEntity)
  user_id: number;

  //   @Column()
  //   session_id: string;

  @Column()
  total: number;

  @Column()
  create_at: Date;

  @Column()
  modified_at: Date;

  //   @Column()
  //   deleted_at: Date;
}

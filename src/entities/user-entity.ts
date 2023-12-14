import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { Role } from 'src/types/enum';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  user_id: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.buyer,
  })
  role: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  address?: string;

  @Column()
  telephone: string;

  @Column()
  create_at: Date;

  @Column()
  modified_at: Date;

  @Column()
  deleted_at: Date;
}

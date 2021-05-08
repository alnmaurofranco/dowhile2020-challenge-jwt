import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import User from './User'

@Entity('users_refresh_token')
export default class RefreshToken {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ name: 'refreshToken', type: 'varchar', unique: true })
  refreshToken: string

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'users', referencedColumnName: 'id' })
  user_id: User | string

  @Column({ name: 'valid', type: 'boolean' })
  valid: boolean

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date
}

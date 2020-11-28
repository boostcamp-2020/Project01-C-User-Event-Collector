import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Subscribe from './Subscribe';

@Entity()
export default class Membership extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  price!: number;

  @Column()
  period!: string;

  @Column()
  streaming!: boolean;

  @Column()
  offlineStreaming!: boolean;

  @OneToMany(() => Subscribe, subscribe => subscribe.membership, { onDelete: 'CASCADE' })
  subscribe!: Subscribe[];
}

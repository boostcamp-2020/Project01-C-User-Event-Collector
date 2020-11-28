import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";
import Membership from "./Membership";

@Entity()
export default class Subscribe {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  startDate!: Date;

  @ManyToOne(() => User, user => user.subscribe)
  user!: User;

  @ManyToOne(() => Membership, membership => membership.subscribe)
  membership!: Membership;
}

import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './User';
import Track from './Track';

@Entity()
export default class MP3 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  purchaseDate!: Date;

  @ManyToOne(() => User, user => user.mp3)
  user!: User;

  @ManyToOne(() => Track, track => track.mp3)
  track!: Track;
}

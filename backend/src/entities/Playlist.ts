import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import User from './User';
import Track from './Track';

@Entity()
export default class Playlist extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  createDate!: Date;

  @ManyToMany(() => User, user => user.playlists)
  users!: User[];

  @ManyToMany(() => Track, track => track.playlists)
  tracks!: Track[];
}

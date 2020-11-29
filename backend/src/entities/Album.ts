import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import Artist from './Artist';
import User from './User';
import Genre from './Genre';

@Entity()
export default class Album extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  date!: Date;

  @ManyToMany(() => User, user => user.albums)
  users!: User[];

  @ManyToMany(() => Artist, artist => artist.albums)
  artists!: Artist[];

  @ManyToMany(() => Genre, genre => genre.albums)
  genres!: Genre[];
}

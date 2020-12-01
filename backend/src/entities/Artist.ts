import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import User from './User';
import Album from './Album';
import Track from './Track';
import Genre from './Genre';

export type UserGenderType = 'F' | 'M' | 'U';

@Entity()
export default class Artist extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  debut!: Date;

  @Column()
  imgUrl!: string;

  @ManyToMany(() => User, user => user.artists, { onDelete: 'CASCADE' })
  users!: User[];

  @ManyToMany(() => Album, album => album.artists, { onDelete: 'CASCADE' })
  @JoinTable({ name: 'ArtistAlbum' })
  albums!: Album[];

  @ManyToMany(() => Track, track => track.artists, { onDelete: 'CASCADE' })
  @JoinTable({ name: 'ArtistTrack' })
  tracks!: Track[];

  @ManyToMany(() => Genre, genre => genre.artists, { onDelete: 'CASCADE' })
  @JoinTable({ name: 'ArtistGenre' })
  genres!: Genre[];
}

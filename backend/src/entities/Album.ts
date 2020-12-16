import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from 'typeorm';
import Artist from './Artist';
import User from './User';
import Genre from './Genre';
import Track from './Track';

@Entity()
export default class Album extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  imgUrl!: string;

  @Column()
  date!: Date;

  @OneToMany(() => Track, track => track.album)
  tracks!: Track[];

  @ManyToMany(() => User, user => user.albums)
  users!: User[];

  @ManyToMany(() => Artist, artist => artist.albums)
  artists!: Artist[];

  @ManyToMany(() => Genre, genre => genre.albums)
  genres!: Genre[];

  static findByUserId(id: number) {
    return this.createQueryBuilder('album')
      .innerJoin('album.users', 'user')
      .leftJoinAndSelect('album.artists', 'artist')
      .where('user.id = :id', { id })
      .getMany();
  }
}

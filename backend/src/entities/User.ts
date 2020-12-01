import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import MP3 from './MP3';
import Artist from './Artist';
import Album from './Album';
import Track from './Track';
import Playlist from './Playlist';
import Subscribe from './Subscribe';

// export type UserGenderType = 'F' | 'M' | 'U';

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  email!: string;

  @Column()
  username!: string;

  @Column()
  nickname!: string;

  @Column()
  profileURL!: string;

  // @Column({
  //   type: 'enum',
  //   enum: ['F', 'M', 'U'],
  //   default: 'U',
  // })
  // gender!: UserGenderType;

  // @Column()
  // birth!: Date;

  @CreateDateColumn()
  createDate!: Date;

  @Column({
    nullable: true,
  })
  password!: string;

  @OneToMany(() => MP3, mp3 => mp3.user, { onDelete: 'CASCADE' })
  mp3!: MP3[];

  @OneToMany(() => Subscribe, subscribe => subscribe.user, { onDelete: 'CASCADE' })
  subscribe!: Subscribe[];

  @ManyToMany(() => Artist, artist => artist.users, { onDelete: 'CASCADE' })
  @JoinTable({ name: 'UserArtist' })
  artists!: Artist[];

  @ManyToMany(() => Album, album => album.users, { onDelete: 'CASCADE' })
  @JoinTable({ name: 'UserAlbum' })
  albums!: Album[];

  @ManyToMany(() => Playlist, playlist => playlist.users, { onDelete: 'CASCADE' })
  @JoinTable({ name: 'UserPlaylist' })
  playlists!: Playlist[];

  @ManyToMany(() => Track, track => track.users, { onDelete: 'CASCADE' })
  @JoinTable({ name: 'UserTrack' })
  tracks!: Track[];
}

import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import MP3 from './MP3';
import User from './User';
import Artist from './Artist';
import Playlist from './Playlist';
import Album from './Album';

@Entity()
export default class Track extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  title!: string;

  @Column()
  songwriter!: string;

  @Column()
  composer!: string;

  @Column()
  isLocal!: boolean;

  @ManyToOne(() => Album, album => album.tracks)
  album!: Album;

  @OneToMany(() => MP3, mp3 => mp3.user, { onDelete: 'CASCADE' })
  mp3!: MP3[];

  @ManyToMany(() => Artist, artist => artist.tracks, { onDelete: 'CASCADE' })
  artists!: Artist[];

  @ManyToMany(() => User, user => user.tracks)
  users!: User[];

  @ManyToMany(() => Playlist, playlist => playlist.tracks, { onDelete: 'CASCADE' })
  @JoinTable({ name: 'TrackPlaylist' })
  playlists!: Playlist[];
}

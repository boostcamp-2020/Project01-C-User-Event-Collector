import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Track from './Track';

@Entity()
export default class Mag extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  imgUrl!: string;

  @Column()
  date!: string;

  @Column()
  tag!: string;

  @Column()
  content!: string;

  @OneToMany(() => Track, track => track.mag)
  tracks!: Track[];
}

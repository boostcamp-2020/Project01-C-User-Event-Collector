import Album from '../../entities/Album';

const getAlbums = (): Promise<Album[]> => {
  // return Album.find();
  return Album.createQueryBuilder('album')
    .leftJoinAndSelect('album.tracks', 'track')
    .leftJoinAndSelect('track.artists', 'artist')
    .leftJoinAndSelect('artist.genres', 'genre')
    .getMany();
};

const getAlbumByAlbumId = (albumId: number): Promise<Album | undefined> => {
  // return Album.findOne(albumId, { relations: ['genres', 'artists', 'tracks'] });
  return Album.createQueryBuilder('album')
    .leftJoinAndSelect('album.tracks', 'track')
    .leftJoinAndSelect('track.artists', 'artist')
    .leftJoinAndSelect('artist.genres', 'genre')
    .where('album.id = :albumId', { albumId })
    .getOne();
};

export { getAlbums, getAlbumByAlbumId };

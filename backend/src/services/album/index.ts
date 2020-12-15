import Album from '../../entities/Album';

const getAlbums = (): Promise<Album[]> => {
  return Album.find();
};

const getAlbumByAlbumId = (albumId: number): Promise<Album | undefined> => {
  return Album.findOne(albumId, { relations: ['genres', 'artists', 'tracks'] });
};

export { getAlbums, getAlbumByAlbumId };

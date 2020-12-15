import Artist from '../../entities/Artist';

const getArtists = (): Promise<Artist[]> => {
  return Artist.find();
};

const getArtistByArtistId = (artistId: number): Promise<Artist | undefined> => {
  return Artist.findOne(artistId, { relations: ['genres', 'tracks', 'albums'] });
};

export { getArtists, getArtistByArtistId };

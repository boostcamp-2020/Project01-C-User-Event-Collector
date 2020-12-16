import Artist from '../../entities/Artist';

const getArtists = (): Promise<Artist[]> => {
  return Artist.find();
};

const getArtistByArtistId = (artistId: number): Promise<Artist | undefined> => {
  // return Artist.findOne(artistId, { relations: ['genres', 'tracks', 'albums'] });
  return Artist.createQueryBuilder('artist')
    .innerJoinAndSelect('artist.genres', 'genre')
    .innerJoinAndSelect('artist.tracks', 'track')
    .innerJoinAndSelect('artist.albums', 'albums')
    .innerJoinAndSelect('track.album', 'album')
    .where('artist.id = :artistId', { artistId })
    .getOne();
};

export { getArtists, getArtistByArtistId };

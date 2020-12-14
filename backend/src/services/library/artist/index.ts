import User from '../../../entities/User';
import Artist from '../../../entities/Artist';

const getArtistsByUserId = (userId: number): Promise<Artist[]> => {
  return Artist.findByUserId(userId);
};

const addArtist = async (userId: number, artistId: number): Promise<boolean> => {
  const user = (await User.findOne(userId, { relations: ['artists'] })) as User;
  const artist = (await Artist.findOne(artistId)) as Artist;
  if (!artist) return false;

  user.artists.push(artist);
  await user.save();
  return true;
};

const deleteArtist = async (userId: number, artistId: number): Promise<boolean> => {
  const user = (await User.findOne(userId, { relations: ['artists'] })) as User;
  const artistToRemove = (await Artist.findOne(artistId)) as Artist;
  if (!artistToRemove) return false;

  user.artists = user.artists.filter(artist => artist.id !== artistToRemove.id);
  await user.save();
  return true;
};

export { getArtistsByUserId, addArtist, deleteArtist };

import Album from '../../../entities/Album';
import User from '../../../entities/User';

const getAlbumsByUserId = (userId: number): Promise<Album[]> => {
  return Album.findByUserId(userId);
};

const addAlbum = async (userId: number, albumId: number): Promise<boolean> => {
  const user = (await User.findOne(userId, { relations: ['albums'] })) as User;
  const album = (await Album.findOne(albumId)) as Album;
  if (!album) return false;

  user.albums.push(album);
  await user.save();
  return true;
};

const deleteAlbum = async (userId: number, albumId: number): Promise<boolean> => {
  const user = (await User.findOne(userId, { relations: ['albums'] })) as User;
  const albumToRemove = (await Album.findOne(albumId)) as Album;
  if (!albumToRemove) return false;

  user.albums = user.albums.filter(album => album.id !== albumToRemove.id);
  await user.save();
  return true;
};

export { getAlbumsByUserId, addAlbum, deleteAlbum };

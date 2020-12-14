import User from '../../../entities/User';
import Playlist from '../../../entities/Playlist';

const getPlaylistsByUserId = (playlistId: number): Promise<Playlist[]> => {
  return Playlist.findByUserId(playlistId);
};

const addPlaylist = async (userId: number, playlistId: number): Promise<boolean> => {
  const user = (await User.findOne(userId, { relations: ['playlists'] })) as User;
  const playlist = (await Playlist.findOne(playlistId)) as Playlist;
  if (!playlist) return false;

  user.playlists.push(playlist);
  await user.save();
  return true;
};

const deletePlaylist = async (userId: number, playlistId: number): Promise<boolean> => {
  const user = (await User.findOne(userId, { relations: ['playlists'] })) as User;
  const playlistToRemove = (await Playlist.findOne(playlistId)) as Playlist;
  if (!playlistToRemove) return false;

  user.playlists = user.playlists.filter(playlist => playlist.id !== playlistToRemove.id);
  await user.save();
  return true;
};

export { getPlaylistsByUserId, addPlaylist, deletePlaylist };

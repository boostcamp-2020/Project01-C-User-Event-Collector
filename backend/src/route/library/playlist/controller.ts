import { Request, Response, NextFunction } from 'express';
import User from '../../../entities/User';
import Playlist from '../../../entities/Playlist';

const getPlaylistsByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { id: userId } = req.user as User;
    const playlistLists = await Playlist.findByUserId(userId);
    res.status(200).json({
      success: true,
      data: playlistLists,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const addPlaylist = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    // const { id: userId } = req.user as User;
    const { playlistId } = req.body;
    if (!playlistId) return res.status(400).json({ message: 'Parameter Error: playlistId' });

    const user = (await User.findOne(1, { relations: ['playlists'] })) as User;
    const playlist = (await Playlist.findOne(playlistId)) as Playlist;
    if (!playlist) return res.status(404).json({ message: 'Playlist Not Found' });

    user.playlists.push(playlist);
    await user.save();
    return res.status(204).end();
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const deletePlaylist = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    // const { id: userId } = req.user as User;
    const { playlistId } = req.params;
    if (!playlistId) return res.status(400).json({ message: 'Parameter Error: playlistId' });

    const user = (await User.findOne(1, { relations: ['playlists'] })) as User;
    const playlistToRemove = (await Playlist.findOne(playlistId)) as Playlist;
    if (!playlistToRemove) return res.status(404).json({ message: 'Playlist Not Found' });

    user.playlists = user.playlists.filter(playlist => playlist.id !== playlistToRemove.id);
    await user.save();
    return res.status(204).end();
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

export { getPlaylistsByUserId, addPlaylist, deletePlaylist };

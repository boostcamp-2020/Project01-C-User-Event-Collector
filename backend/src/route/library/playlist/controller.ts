import { Request, Response, NextFunction } from 'express';
import { IJwtPayload } from '../../../middlewares/auth';
import * as libraryPlaylistService from '../../../services/library/playlist';

const getPlaylistsByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { id: userId } = req.user as IJwtPayload;
    const playlists = await libraryPlaylistService.getPlaylistsByUserId(userId);
    res.status(200).json({ success: true, data: playlists });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const addPlaylist = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { id: userId } = req.user as IJwtPayload;
    const { playlistId } = req.body;
    if (!playlistId) return res.status(400).json({ message: 'Parameter Error: playlistId' });

    const isSuccess = await libraryPlaylistService.addPlaylist(userId, playlistId);
    if (!isSuccess) return res.status(404).json({ message: 'Playlist Not Found' });
    return res.status(204).end();
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const deletePlaylist = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { id: userId } = req.user as IJwtPayload;
    const { playlistId } = req.params;
    if (!playlistId) return res.status(400).json({ message: 'Parameter Error: playlistId' });

    const isSuccess = await libraryPlaylistService.deletePlaylist(userId, parseInt(playlistId, 10));
    if (!isSuccess) return res.status(404).json({ message: 'Playlist Not Found' });
    return res.status(204).end();
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

export { getPlaylistsByUserId, addPlaylist, deletePlaylist };

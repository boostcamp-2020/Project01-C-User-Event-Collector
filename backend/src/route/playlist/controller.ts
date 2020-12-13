import { Request, Response, NextFunction } from 'express';
import Playlist from '../../entities/Playlist';

const getPlaylists = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const playlist = await Playlist.find({ relations: ['tracks'] });
    if (!playlist) return res.status(404).json({ message: 'Playlist Not Found' });
    return res.status(200).json({ success: true, data: playlist });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const getPlaylistByPlaylistId = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const { playlistId } = req.params;
    const playlist = await Playlist.findOne(playlistId, { relations: ['tracks'] });
    if (!playlist) return res.status(404).json({ message: 'Playlist Not Found' });
    return res.status(200).json({ success: true, data: playlist });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

export { getPlaylists, getPlaylistByPlaylistId };

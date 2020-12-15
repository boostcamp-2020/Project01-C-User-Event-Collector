import { Request, Response, NextFunction } from 'express';
import * as playlistService from '../../services/playlist';

const getPlaylists = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const playlists = await playlistService.getPlaylists();
    if (!playlists) return res.status(404).json({ message: 'Playlist Not Found' });
    return res.status(200).json({ success: true, data: playlists });
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
    const playlist = await playlistService.getPlaylistByPlaylistId(parseInt(playlistId, 10));
    if (!playlist) return res.status(404).json({ message: 'Playlist Not Found' });
    return res.status(200).json({ success: true, data: playlist });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

export { getPlaylists, getPlaylistByPlaylistId };

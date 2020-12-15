import { Request, Response, NextFunction } from 'express';
import * as artistService from '../../services/artist';

const getArtists = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const artists = await artistService.getArtists();
    if (!artists) return res.status(404).json({ message: 'Artist Not Found' });
    return res.status(200).json({ success: true, data: artists });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const getArtistByArtistId = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const { artistId } = req.params;
    const artist = await artistService.getArtistByArtistId(parseInt(artistId, 10));
    if (!artist) return res.status(404).json({ message: 'Artist Not Found' });
    return res.status(200).json({ success: true, data: artist });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

export { getArtists, getArtistByArtistId };

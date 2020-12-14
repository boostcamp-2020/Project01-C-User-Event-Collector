import { Request, Response, NextFunction } from 'express';
import Artist from '../../entities/Artist';

const getArtists = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const artist = await Artist.find();
    if (!artist) return res.status(404).json({ message: 'Artist Not Found' });
    return res.status(200).json({ success: true, data: artist });
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
    const artist = await Artist.findOne(artistId, { relations: ['genres', 'tracks', 'albums'] });
    if (!artist) return res.status(404).json({ message: 'Artist Not Found' });
    return res.status(200).json({ success: true, data: artist });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

export { getArtists, getArtistByArtistId };

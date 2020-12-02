import { Request, Response, NextFunction } from 'express';
import Artist from '../../entities/Artist';

const getArtistByArtistId = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { artistId } = req.params;
    const artist = await Artist.findOne(artistId, { relations: ['genres'] });
    res.status(200).json({ success: true, data: artist });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export { getArtistByArtistId };

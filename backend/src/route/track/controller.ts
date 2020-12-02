import { Request, Response, NextFunction } from 'express';
import Track from '../../entities/Track';

const getTrackByTrackId = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { id: trackId } = req.params;
    const track = await Track.findOne(trackId, { relations: ['album', 'artists'] });
    res.json({ data: track, message: 'success' });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export { getTrackByTrackId };

import { Request, Response, NextFunction } from 'express';
import Track from '../../entities/Track';

const getTrackByTrackId = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { trackId } = req.params;
    const track = await Track.findOne(trackId, { relations: ['album', 'artists'] });
    res.status(200).json({ success: true, data: track });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export { getTrackByTrackId };

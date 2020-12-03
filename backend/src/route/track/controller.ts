import { Request, Response, NextFunction } from 'express';
import Track from '../../entities/Track';

const getTrackByTrackId = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { trackId } = req.params;
    const track = await Track.findOne(trackId, { relations: ['album', 'artists'] });
    if (!track) return res.status(404).json({ message: 'Track Not Found' });
    return res.status(200).json({ success: true, data: track });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

export { getTrackByTrackId };

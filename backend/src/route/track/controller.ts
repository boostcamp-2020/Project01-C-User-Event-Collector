import { Request, Response, NextFunction } from 'express';
import * as trackService from '../../services/track';

const getTracks = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const tracks = await trackService.getTracks();
    if (!tracks) return res.status(404).json({ message: 'Tracks Not Found' });
    return res.status(200).json({ success: true, data: tracks });
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

const getTrackByTrackId = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { trackId } = req.params;
    const track = await trackService.getTrackByTrackId(parseInt(trackId, 10));
    if (!track) return res.status(404).json({ message: 'Track Not Found' });
    return res.status(200).json({ success: true, data: track });
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

export { getTracks, getTrackByTrackId };

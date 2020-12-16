import { Request, Response, NextFunction } from 'express';
import { IJwtPayload } from '../../../middlewares/auth';
import * as libraryTrackService from '../../../services/library/track';

const getTracksByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { id: userId } = req.user as IJwtPayload;
    const trackList = await libraryTrackService.getTracksByUserId(userId);
    res.status(200).json({ success: true, data: trackList });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const addTrack = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { id: userId } = req.user as IJwtPayload;
    const { trackId } = req.body;
    if (!trackId) return res.status(400).json({ message: 'Parameter Error: trackId' });

    const isSuccess = await libraryTrackService.addTrack(userId, trackId);
    if (!isSuccess) return res.status(404).json({ message: 'Track Not Found' });
    return res.status(204).end();
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

const deleteTrack = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { id: userId } = req.user as IJwtPayload;
    const { trackId } = req.params;
    if (!trackId) return res.status(400).json({ message: 'Parameter Error: trackId' });

    const isSuccess = await libraryTrackService.deleteTrack(userId, parseInt(trackId, 10));
    if (!isSuccess) return res.status(404).json({ message: 'Track Not Found' });
    return res.status(204).end();
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

export { getTracksByUserId, addTrack, deleteTrack };

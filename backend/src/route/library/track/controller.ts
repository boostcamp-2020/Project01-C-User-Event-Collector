import { Request, Response, NextFunction } from 'express';
import Track from '../../../entities/Track';
import User from '../../../entities/User';

const getTracksByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const trackList = await Track.findByUserId(1);
    console.log('@@@ trackList : ', trackList);
    res.status(200).json({
      success: true,
      data: trackList,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const addTrack = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    // const { id: userId } = req.user as User;
    const { trackId } = req.body;
    if (!trackId) return res.status(400).json({ message: 'Parameter Error: trackId' });

    const user = (await User.findOne(1, { relations: ['tracks'] })) as User;
    const track = (await Track.findOne(trackId)) as Track;
    if (!track) return res.status(404).json({ message: 'Track Not Found' });

    user.tracks.push(track);
    await user.save();
    return res.status(204).end();
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const deleteTrack = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    // const { id: userId } = req.user as User;
    const { trackId } = req.params;
    if (!trackId) return res.status(400).json({ message: 'Parameter Error: trackId' });

    const user = (await User.findOne(1, { relations: ['tracks'] })) as User;
    const trackToRemove = (await Track.findOne(trackId)) as Track;
    if (!trackToRemove) return res.status(404).json({ message: 'Track Not Found' });

    user.tracks = user.tracks.filter(track => track.id !== trackToRemove.id);
    await user.save();
    return res.status(204).end();
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

export { getTracksByUserId, addTrack, deleteTrack };

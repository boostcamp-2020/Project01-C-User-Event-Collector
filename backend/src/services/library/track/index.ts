import Track from '../../../entities/Track';
import User from '../../../entities/User';

const getTracksByUserId = (userId: number): Promise<Track[]> => {
  return Track.findByUserId(userId);
};

const addTrack = async (userId: number, trackId: number): Promise<boolean> => {
  const user = (await User.findOne(userId, { relations: ['tracks'] })) as User;
  const track = (await Track.findOne(trackId)) as Track;
  if (!track) return false;

  user.tracks.push(track);
  await user.save();
  return true;
};

const deleteTrack = async (userId: number, trackId: number): Promise<boolean> => {
  const user = (await User.findOne(userId, { relations: ['tracks'] })) as User;
  const trackToRemove = (await Track.findOne(trackId)) as Track;
  if (!trackToRemove) false;

  user.tracks = user.tracks.filter(track => track.id !== trackToRemove.id);
  await user.save();
  return true;
};

export { getTracksByUserId, addTrack, deleteTrack };

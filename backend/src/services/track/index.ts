import Track from '../../entities/Track';

const getTrackByTrackId = (trackId: number): Promise<Track | undefined> => {
  return Track.findOne(trackId, { relations: ['album', 'artists'] });
};

export { getTrackByTrackId };

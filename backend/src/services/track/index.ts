import Track from '../../entities/Track';

const getTracks = (): Promise<Track[]> => {
  return Track.find({ relations: ['album', 'artists'] });
};

const getTrackByTrackId = (trackId: number): Promise<Track | undefined> => {
  return Track.findOne(trackId, { relations: ['album', 'artists'] });
};

export { getTracks, getTrackByTrackId };

import Playlist from '../../entities/Playlist';

const getPlaylists = (): Promise<Playlist[]> => {
  // return Playlist.find({ relations: ['tracks'] });
  // return Mag.find();
  return Playlist.createQueryBuilder('playlist')
    .leftJoinAndSelect('playlist.tracks', 'track')
    .leftJoinAndSelect('track.album', 'album')
    .leftJoinAndSelect('track.artists', 'artist')
    .getMany();
};

const getPlaylistByPlaylistId = (playlistId: number): Promise<Playlist | undefined> => {
  // return Playlist.findOne(playlistId, { relations: ['tracks'] });
  return Playlist.createQueryBuilder('playlist')
    .leftJoinAndSelect('playlist.tracks', 'track')
    .leftJoinAndSelect('track.album', 'album')
    .leftJoinAndSelect('track.artists', 'artist')
    .where('playlist.id = :playlistId', { playlistId })
    .getOne();
};

export { getPlaylists, getPlaylistByPlaylistId };

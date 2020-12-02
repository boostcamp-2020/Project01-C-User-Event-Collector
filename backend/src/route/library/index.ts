import * as express from 'express';
import albumRoute from './album';
import trackRoute from './track';
import artistRoute from './artist';
import playlistRoute from './playlist';

const route = express.Router();

route.use('/albums', albumRoute);
route.use('/tracks', trackRoute);
route.use('/artists', artistRoute);
route.use('/playlists', playlistRoute);

export default route;

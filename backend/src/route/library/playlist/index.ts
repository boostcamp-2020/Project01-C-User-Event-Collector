import * as express from 'express';
import * as passport from 'passport';
import { getPlaylistsByUserId, addPlaylist, deletePlaylist } from './controller';

const route = express.Router();

route.get('/', passport.authenticate('jwt', { session: false }), getPlaylistsByUserId);
route.post('/', passport.authenticate('jwt', { session: false }), addPlaylist);
route.delete('/:playlistId', passport.authenticate('jwt', { session: false }), deletePlaylist);

export default route;

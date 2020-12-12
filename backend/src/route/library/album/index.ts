import * as express from 'express';
import * as passport from 'passport';
import { getAlbumsByUserId, addAlbum, deleteAlbum } from './controller';

const route = express.Router();

route.get('/', passport.authenticate('jwt', { session: false }), getAlbumsByUserId);
route.post('/', addAlbum);
route.delete('/:albumId', deleteAlbum);

export default route;

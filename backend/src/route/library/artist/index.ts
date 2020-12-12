import * as express from 'express';
import * as passport from 'passport';
import { getArtistsByUserId, addArtist, deleteArtist } from './controller';

const route = express.Router();

route.get('/', passport.authenticate('jwt', { session: false }), getArtistsByUserId);
route.post('/', passport.authenticate('jwt', { session: false }), addArtist);
route.delete('/:artistId', passport.authenticate('jwt', { session: false }), deleteArtist);

export default route;

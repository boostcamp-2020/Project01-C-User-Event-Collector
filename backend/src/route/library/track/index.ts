import * as express from 'express';
import * as passport from 'passport';
import { getTracksByUserId, addTrack, deleteTrack } from './controller';

const route = express.Router();

route.get('/', passport.authenticate('jwt', { session: false }), getTracksByUserId);
route.post('/', passport.authenticate('jwt', { session: false }), addTrack);
route.delete('/:trackId', passport.authenticate('jwt', { session: false }), deleteTrack);

export default route;

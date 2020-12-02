import * as express from 'express';
import { getTracksByUserId, addTrack, deleteTrack } from './controller';

const route = express.Router();

route.get('/', getTracksByUserId);
route.post('/', addTrack);
route.delete('/:trackId', deleteTrack);

export default route;

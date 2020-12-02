import * as express from 'express';
import * as passport from 'passport';
import { getTrackByTrackId } from './controller';

const route = express.Router();

route.get('/:id', getTrackByTrackId);

export default route;

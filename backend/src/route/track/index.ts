import * as express from 'express';
import { getTracks, getTrackByTrackId } from './controller';

const route = express.Router();

route.get('/', getTracks);
route.get('/:trackId', getTrackByTrackId);

export default route;

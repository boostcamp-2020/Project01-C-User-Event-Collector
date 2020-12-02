import * as express from 'express';
import { getAlbumByAlbumId } from './controller';

const route = express.Router();

route.get('/:id', getAlbumByAlbumId);

export default route;

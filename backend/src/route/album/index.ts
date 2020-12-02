import * as express from 'express';
import { getAlbumByAlbumId } from './controller';

const route = express.Router();

route.get('/:albumId', getAlbumByAlbumId);

export default route;

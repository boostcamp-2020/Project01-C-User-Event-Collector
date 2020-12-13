import * as express from 'express';
import { getAlbums, getAlbumByAlbumId } from './controller';

const route = express.Router();

route.get('/', getAlbums);
route.get('/:albumId', getAlbumByAlbumId);

export default route;

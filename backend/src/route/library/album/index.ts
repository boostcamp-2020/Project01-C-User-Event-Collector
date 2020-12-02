import * as express from 'express';
import getAlbums from './controller';

const route = express.Router();

route.get('/', getAlbums);

export default route;

import * as express from 'express';
import getAlbums from './controller';

const route = express.Router();

// test API: /POST
route.get('/', getAlbums);

export default route;

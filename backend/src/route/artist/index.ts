import * as express from 'express';
import getArtistByArtistId from './controller';

const route = express.Router();

route.get('/:artistId', getArtistByArtistId);

export default route;

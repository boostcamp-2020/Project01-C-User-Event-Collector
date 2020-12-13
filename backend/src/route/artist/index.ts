import * as express from 'express';
import { getArtists, getArtistByArtistId } from './controller';

const route = express.Router();

route.get('/', getArtists);
route.get('/:artistId', getArtistByArtistId);

export default route;

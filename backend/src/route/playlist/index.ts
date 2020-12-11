import * as express from 'express';
import getPlaylists from './controller';

const route = express.Router();

route.get('/', getPlaylists);

export default route;

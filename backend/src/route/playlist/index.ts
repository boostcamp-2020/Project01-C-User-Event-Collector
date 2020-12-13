import * as express from 'express';
import { getPlaylists, getPlaylistByPlaylistId } from './controller';

const route = express.Router();

route.get('/', getPlaylists);
route.get('/:playlistId', getPlaylistByPlaylistId);

export default route;

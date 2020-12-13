import * as express from 'express';
import * as passport from 'passport';
import { getArtistsByUserId, addArtist, deleteArtist } from './controller';

const route = express.Router();

route.get('/', getArtistsByUserId);
route.post('/', addArtist);
route.delete('/:artistId', deleteArtist);

export default route;

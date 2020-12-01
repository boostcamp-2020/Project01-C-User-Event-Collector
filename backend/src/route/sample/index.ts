import * as express from 'express';
import * as passport from 'passport';
import { sampleGet, samplePost } from './controller';

const route = express.Router();

// test API: /GET
route.get('/', sampleGet);

// test API with JWT: /GET
route.get('/jwt', passport.authenticate('jwt', { session: false }), sampleGet);

// test API: /POST
route.post('/', samplePost);

export default route;

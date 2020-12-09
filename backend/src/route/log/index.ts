import * as express from 'express';
import * as passport from 'passport';
import createLog from './controller';

const route = express.Router();

// test API: /POST
route.post('/', passport.authenticate('naver', { session: false }), createLog);
// route.post('/', createLog);

export default route;

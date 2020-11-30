import * as express from 'express';
import * as passport from 'passport';

import { getToken } from './controller';

const route = express.Router();

route.get('/login', passport.authenticate('naver', { session: false }));

route.get('/login/callback', passport.authenticate('naver', { session: false }), getToken);

export default route;

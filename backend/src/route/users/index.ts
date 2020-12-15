import * as express from 'express';
import { authenticateWithJwt } from '../../middlewares/auth';
import { getUser } from './controller';

const route = express.Router();

route.get('/', authenticateWithJwt, getUser);

export default route;

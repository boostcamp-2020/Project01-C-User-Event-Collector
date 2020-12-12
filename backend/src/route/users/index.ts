import * as express from 'express';
import { authenticateWithJwt } from '../../middlewares/auth';
import { getUser, createUser, updateUser, deleteUser } from './controller';

const route = express.Router();

// test API: /GET
route.get('/', authenticateWithJwt, getUser);

// test API: /POST
route.post('/', createUser);

// test API: /PATCH
route.post('/', updateUser);

// test API: /DELETE
route.post('/', deleteUser);

export default route;

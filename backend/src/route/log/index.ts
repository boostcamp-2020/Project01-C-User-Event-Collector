import * as express from 'express';
import createLog from './controller';

const route = express.Router();

route.post('/', createLog);

export default route;

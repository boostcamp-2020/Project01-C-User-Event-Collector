import * as express from 'express';
import createLog from './controller';

const route = express.Router();

// test API: /POST
route.post('/', createLog);
// route.post('/', createLog);

export default route;

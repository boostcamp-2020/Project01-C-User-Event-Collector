import * as express from 'express';
import { authenticateWithJwt } from '../../middlewares/auth';
import { sampleGet, samplePost } from './controller';

const route = express.Router();

// test API: /GET
route.get('/', sampleGet);

// test API with JWT: /GET
route.get('/jwt', authenticateWithJwt, sampleGet);

// test API: /POST
route.post('/', samplePost);

export default route;

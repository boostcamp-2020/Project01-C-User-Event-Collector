import * as express from 'express';
import { sampleGet, samplePost } from './controller';

const route = express.Router();

// test API: /GET
route.get('/', sampleGet);

// test API: /POST
route.post('/', samplePost);

export default route;

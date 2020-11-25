import * as express from 'express';
import sampleRoute from './sample';

const route = express.Router();

route.use('/sample', sampleRoute);

export default route;

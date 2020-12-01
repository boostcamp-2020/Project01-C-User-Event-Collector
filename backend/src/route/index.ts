import * as express from 'express';
import sampleRoute from './sample';
import userRoute from './users';
import logRoute from './log';

const route = express.Router();

route.use('/sample', sampleRoute);
route.use('/user', userRoute);
route.use('/log', logRoute);

export default route;

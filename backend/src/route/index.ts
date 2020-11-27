import * as express from 'express';
import sampleRoute from './sample';
import userRoute from './users';

const route = express.Router();

route.use('/sample', sampleRoute);
route.use('/user', userRoute);

export default route;

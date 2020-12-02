import * as express from 'express';
import sampleRoute from './sample';
import userRoute from './users';
import logRoute from './log';
import authRoute from './auth';
import libraryRoute from './library';

const route = express.Router();

route.use('/sample', sampleRoute);
route.use('/user', userRoute);
route.use('/log', logRoute);
route.use('/auth', authRoute);
route.use('/library', libraryRoute);

export default route;

import * as express from 'express';
import sampleRoute from './sample';
import userRoute from './users';
import logRoute from './log';
import authRoute from './auth';
import libraryRoute from './library';
import trackRoute from './track';
import albumRoute from './album';
import artistRoute from './artist';
import magRoute from './mag';

const route = express.Router();

route.use('/sample', sampleRoute);
route.use('/user', userRoute);
route.use('/log', logRoute);
route.use('/auth', authRoute);
route.use('/library', libraryRoute);
route.use('/track', trackRoute);
route.use('/album', albumRoute);
route.use('/artist', artistRoute);
route.use('/mag', magRoute);

export default route;

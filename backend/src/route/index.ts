import * as express from 'express';
import sampleRoute from './sample';
import userRoute from './users';
<<<<<<< HEAD
import logRoute from './log';
=======
import authRoute from './auth';
>>>>>>> 926103a6538e028724cd86c9d3ed869b4e3bce87

const route = express.Router();

route.use('/sample', sampleRoute);
route.use('/user', userRoute);
<<<<<<< HEAD
route.use('/log', logRoute);
=======
route.use('/auth', authRoute);
>>>>>>> 926103a6538e028724cd86c9d3ed869b4e3bce87

export default route;

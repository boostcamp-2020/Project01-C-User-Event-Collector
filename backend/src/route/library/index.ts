import * as express from 'express';
import albumRoute from './album';

const route = express.Router();

route.use('/albums', albumRoute);

export default route;

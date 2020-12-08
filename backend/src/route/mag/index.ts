import * as express from 'express';
import { getMags, getMagById } from './controller';

const route = express.Router();

route.get('/', getMags);
route.get('/:magId', getMagById);

export default route;

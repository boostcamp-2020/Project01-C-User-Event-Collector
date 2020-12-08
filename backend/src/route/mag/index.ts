import * as express from 'express';
import { getMagazines, getMagazineById } from './controller';

const route = express.Router();

route.get('/', getMagazines);
route.get('/:magId', getMagazineById);

export default route;

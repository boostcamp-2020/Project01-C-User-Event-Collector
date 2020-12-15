import * as express from 'express';
import { getMagazines, getMagazineByMagazineId } from './controller';

const route = express.Router();

route.get('/', getMagazines);
route.get('/:magId', getMagazineByMagazineId);

export default route;

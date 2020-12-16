import * as express from 'express';
import { createBulkLogs, createLog } from './controller';

const route = express.Router();

route.post('/', createLog);
route.post('/bulk', createBulkLogs);

export default route;

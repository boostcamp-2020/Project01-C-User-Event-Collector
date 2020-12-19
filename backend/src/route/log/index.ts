import * as express from 'express';
import { createBulkLogs, createLog, getLogs } from './controller';

const route = express.Router();

route.get('/', getLogs);
route.post('/', createLog);
route.post('/bulk', createBulkLogs);

export default route;

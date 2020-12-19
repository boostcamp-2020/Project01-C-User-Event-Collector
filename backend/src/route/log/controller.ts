import { Request, Response, NextFunction } from 'express';
import Log from '../../models/Log';
import { IJwtPayload } from '../../middlewares/auth';

const getLogs = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const logs = await Log.find({}, { _id: 0 }).sort({ _id: -1 }).limit(10);
    if (!logs) return res.status(404).json({ message: 'Log Not Found' });
    return res.status(200).json({ success: true, data: logs });
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

const createLog = async (req: Request, res: Response): Promise<void> => {
  try {
    const logInfo = req.body;
    if (req.user) {
      const { id: userId } = req.user as IJwtPayload;
      logInfo.userInfo = { isLoggedIn: true, user: userId };
    } else {
      logInfo.userInfo = { isLoggedIn: false };
    }
    logInfo.userAgent = req.headers['user-agent'];

    const log = new Log(logInfo);
    const insertedLog = await log.save();
    console.log('-------------------- log : ', insertedLog);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};

const createBulkLogs = async (req: Request, res: Response): Promise<void> => {
  try {
    const logs = req.body as any[];
    const userAgent = req.headers['user-agent'];
    let userInfo: any;
    if (req.user) {
      const { id: userId } = req.user as IJwtPayload;
      userInfo = { isLoggedIn: true, user: userId };
    } else {
      userInfo = { isLoggedIn: false };
    }

    const insertedLogs = await Log.insertMany(logs.map(log => ({ ...log, userAgent, userInfo })));
    console.log('-------------------- bulk logs : ', insertedLogs);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};

export { createLog, createBulkLogs, getLogs };

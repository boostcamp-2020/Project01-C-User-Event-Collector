import { Request, Response } from 'express';
import Log from '../../models/Log';
import { IJwtPayload } from '../../middlewares/auth';

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
    console.log('-------------------- log : ', log);
    await log.save();
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

export { createLog, createBulkLogs };

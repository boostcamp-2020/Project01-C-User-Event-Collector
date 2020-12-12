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
    console.log('@@@log : ', log);
    await log.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};

export default createLog;

import { Request, Response } from 'express';
import Log from '../../models/Log';

const createLog = async (req: Request, res: Response): Promise<void> => {
  const logInfo = req.body;
  logInfo.userInfo = { isLoggedIn: true, user: req.user };
  logInfo.userAgent = req.headers['user-agent'];
  const log = new Log(logInfo);
  console.log('@@@log : ', log);
  await log.save(err => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
};

export default createLog;

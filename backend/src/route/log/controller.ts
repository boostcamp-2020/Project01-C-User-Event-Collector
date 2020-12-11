import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import Log from '../../models/Log';
import { IJwtPayload } from '../../passport/jwt';

const createLog = async (req: Request, res: Response): Promise<void> => {
  const logInfo = req.body;
  try {
    const token = req.headers.authorization;
    const user = jwt.verify(token as string, process.env.JWT_SECRET as string) as IJwtPayload;
    logInfo.userInfo = { isLoggedIn: true, user: user.id };
  } catch (err) {
    logInfo.userInfo = { isLoggedIn: false };
  }
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

import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export interface IJwtPayload {
  id: number;
  nickname: string;
  email: string;
  profileURL: string;
}

export const authenticateWithJwt = (req: Request, res: Response, next: NextFunction): any => {
  try {
    const token = req.headers.authorization;
    // TODO: redirect 시킬 지 논의해보기
    console.log('backend token : ', token);
    if (!token) return res.redirect(process.env.SERVICE_URL as string);
    const user = jwt.verify(token as string, process.env.JWT_SECRET as string) as IJwtPayload;
    req.user = user;
    next();
  } catch (err) {
    // TODO: redirect 시킬 지 논의해보기
    res.status(401).json({ success: false, message: 'Invalid Token' });
  }
};

export const tryAuthenticateWithJwt = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const token = req.headers.authorization;
    const user = jwt.verify(token as string, process.env.JWT_SECRET as string) as IJwtPayload;
    req.user = user;
    next();
  } catch (err) {
    next();
  }
};

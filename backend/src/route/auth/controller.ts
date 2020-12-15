import { Request, Response } from 'express';
import { IJwtPayload } from '../../middlewares/auth';
import * as authService from '../../services/auth';

const getToken = (req: Request, res: Response): void => {
  const token = authService.createToken(req.user as IJwtPayload);
  if (req.headers['user-agent']?.includes('iPhone')) {
    return res.redirect(`minivibe://token?=${token}`); // 모바일
  }
  res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 24 * 1, httpOnly: false });
  return res.redirect(process.env.SERVICE_URL as string); // 웹
};

export { getToken };

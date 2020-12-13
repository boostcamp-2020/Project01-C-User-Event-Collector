import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import User from '../../entities/User';

const getToken = (req: Request, res: Response): void => {
  const { id, nickname, email, profileURL } = req.user as User;
  const token = jwt.sign({ id, nickname, email, profileURL }, process.env.JWT_SECRET as string, {
    noTimestamp: true,
  });
  if (req.headers['user-agent']?.includes('iPhone')) {
    return res.redirect(`minivibe://token?=${token}`); // 모바일
  }
  res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 24 * 1, httpOnly: false });
  return res.redirect(process.env.SERVICE_URL as string); // 웹
};

export { getToken };

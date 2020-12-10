import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import User from '../../entities/User';

const getToken = (req: Request, res: Response): void => {
  const { id, nickname, email, profileURL } = req.user as User;
  const token = jwt.sign({ id, nickname, email, profileURL }, process.env.JWT_SECRET as string, {
    expiresIn: '1h',
    noTimestamp: true,
  });
  res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 24 * 1, httpOnly: false });
  const ua = req.headers['user-agent']?.toLocaleLowerCase();
  if (
    (ua && 'lgtelecom'.indexOf(ua) > -1) ||
    (ua && 'android'.indexOf(ua) > -1) ||
    (ua && 'blackberry'.indexOf(ua) > -1) ||
    (ua && 'iphone'.indexOf(ua) > -1) ||
    (ua && 'ipad'.indexOf(ua) > -1) ||
    (ua && 'samsung'.indexOf(ua) > -1) ||
    (ua && 'symbian'.indexOf(ua) > -1) ||
    (ua && 'sony'.indexOf(ua) > -1) ||
    (ua && 'SCH-'.indexOf(ua) > -1) ||
    (ua && 'SPH-'.indexOf(ua) > -1)
  ) {
    res.redirect(`minivibe://access?token=${token}`); // 모바일
  }
  res.redirect(process.env.SERVICE_URL as string); // 웹
};

export { getToken };

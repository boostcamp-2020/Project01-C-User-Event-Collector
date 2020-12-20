import { Request, Response } from 'express';
import { IJwtPayload } from '../../middlewares/auth';
import * as authService from '../../services/auth';

const getToken = (req: Request, res: Response): void => {
  // 모바일
  const token = authService.createToken(req.user as IJwtPayload);
  return res.redirect(`minivibe://token?${token}`);
};

export { getToken };

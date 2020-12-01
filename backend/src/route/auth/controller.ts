import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import User from '../../entities/User';

const getToken = (req: Request, res: Response): void => {
  const { id, nickname, email, profileURL } = req.user as User;
  const token = jwt.sign({ id, nickname, email, profileURL }, process.env.JWT_SECRET as string, {
    expiresIn: '1h',
    noTimestamp: true,
  });
  res.json({ token });
};

export { getToken };

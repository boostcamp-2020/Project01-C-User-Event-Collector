import { Request, Response } from 'express';

const getToken = (req: Request, res: Response): void => {
  console.log(req.user);
  res.json({ hi: req.user });
};

export { getToken };

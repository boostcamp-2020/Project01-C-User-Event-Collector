import { Request, Response, NextFunction } from 'express';
// import User from '../../entities/User';

const getUser = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { user } = req;
    if (!user) return res.status(500).json({ success: false });
    return res.status(200).json({ success: true, user });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

export { getUser };

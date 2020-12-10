import * as express from 'express';
// import User from '../../entities/User';

const getUser = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const { user } = req;
    if (!user) return res.json({ success: false });
    return res.status(200).json({ success: true, user });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const createUser = (req: express.Request, res: express.Response): void => {
  const { body, cookies } = req;
  res.json({ body, cookies });
};

const updateUser = (req: express.Request, res: express.Response): void => {
  const { body, cookies } = req;
  console.log(body, cookies);
  res.json({ body, cookies });
};

const deleteUser = (req: express.Request, res: express.Response): void => {
  const { body, cookies } = req;
  res.json({ body, cookies });
};

export { getUser, createUser, updateUser, deleteUser };

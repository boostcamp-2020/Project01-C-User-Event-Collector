import * as express from 'express';
import User from '../../entities/User';

const getUser = async (req: express.Request, res: express.Response) => {
  const { query, cookies } = req;
  res.json({ query, cookies });
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

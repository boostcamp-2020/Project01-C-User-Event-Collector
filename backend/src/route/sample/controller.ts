import { Request, Response } from 'express';

const sampleGet = (req: Request, res: Response): void => {
  const { query, cookies } = req;
  console.log(query, cookies);
  res.json({ query, cookies });
};

const samplePost = (req: Request, res: Response): void => {
  const { body, cookies } = req;
  console.log(body, cookies);
  res.json({ body, cookies });
};

export { sampleGet, samplePost };

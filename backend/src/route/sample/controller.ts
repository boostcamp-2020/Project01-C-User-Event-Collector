import * as express from 'express';

const sampleGet = (req: express.Request, res: express.Response): void => {
  const { query, cookies } = req;
  console.log(query, cookies);
  res.json({ query, cookies });
};

const samplePost = (req: express.Request, res: express.Response): void => {
  const { body, cookies } = req;
  console.log(body, cookies);
  res.json({ body, cookies });
};

export { sampleGet, samplePost };

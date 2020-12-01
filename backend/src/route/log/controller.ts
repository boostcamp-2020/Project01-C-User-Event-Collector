import * as express from 'express';
import Log from '../../models/Log';

const createLog = (req: express.Request, res: express.Response): void => {
  const log = new Log(req.body);
  log.save((err, logInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
};

export default createLog;

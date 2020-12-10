import { Request, Response } from 'express';
import Log from '../../models/Log';

const createLog = async (req: Request, res: Response): Promise<void> => {
  const log = new Log(req.body);
  console.log('@@@@ log :', log);
  await log.save((err, logInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
};

export default createLog;

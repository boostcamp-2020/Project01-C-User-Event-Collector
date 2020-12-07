import { Request, Response, NextFunction } from 'express';
import Mag from '../../entities/Mag';

const getMags = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const mag = await Mag.find();
    if (!mag) return res.status(404).json({ message: 'Mag Not Found' });
    return res.status(200).json({ success: true, data: mag });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const getMagById = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { magId } = req.params;
    const mag = await Mag.findOne(magId, { relations: ['tracks'] });
    if (!mag) return res.status(404).json({ message: 'Magazine Not Found' });
    return res.status(200).json({ success: true, data: mag });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

export { getMags, getMagById };

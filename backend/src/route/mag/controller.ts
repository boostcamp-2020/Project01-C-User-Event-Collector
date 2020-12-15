import { Request, Response, NextFunction } from 'express';
import * as magazineService from '../../services/mag';

const getMagazines = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const mag = await magazineService.getMagazines();
    if (!mag) return res.status(404).json({ message: 'Mag Not Found' });
    return res.status(200).json({ success: true, data: mag });
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

const getMagazineByMagazineId = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const { magId } = req.params;
    const mag = await magazineService.getMagazineByMagazineId(parseInt(magId, 10));
    if (!mag) return res.status(404).json({ message: 'Magazine Not Found' });
    return res.status(200).json({ success: true, data: mag });
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

export { getMagazines, getMagazineByMagazineId };

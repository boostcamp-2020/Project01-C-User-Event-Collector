import { Request, Response, NextFunction } from 'express';
import Album from '../../../entities/Album';

const getAlbums = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const albumList = await Album.findByUserId(1);
    res.status(200).json({
      success: true,
      data: albumList,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export default getAlbums;

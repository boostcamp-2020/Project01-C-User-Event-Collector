import { Request, Response, NextFunction } from 'express';
import Album from '../../entities/Album';

const getAlbumByAlbumId = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { albumId } = req.params;
    const album = await Album.findOne(albumId, { relations: ['genres', 'artists'] });
    res.status(200).json({ success: true, data: album });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export { getAlbumByAlbumId };

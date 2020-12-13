import { Request, Response, NextFunction } from 'express';
import Album from '../../entities/Album';

const getAlbums = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const album = await Album.find();
    if (!album) return res.status(404).json({ message: 'Album Not Found' });
    return res.status(200).json({ success: true, data: album });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const getAlbumByAlbumId = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { albumId } = req.params;
    const album = await Album.findOne(albumId, { relations: ['genres', 'artists', 'tracks'] });
    if (!album) return res.status(404).json({ message: 'Album Not Found' });
    return res.status(200).json({ success: true, data: album });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

export { getAlbums, getAlbumByAlbumId };

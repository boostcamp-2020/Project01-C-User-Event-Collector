import { Request, Response, NextFunction } from 'express';
import * as albumService from '../../services/album';

const getAlbums = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const album = await albumService.getAlbums();
    if (!album) return res.status(404).json({ message: 'Album Not Found' });
    return res.status(200).json({ success: true, data: album });
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

const getAlbumByAlbumId = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { albumId } = req.params;
    const album = await albumService.getAlbumByAlbumId(parseInt(albumId, 10));
    if (!album) return res.status(404).json({ message: 'Album Not Found' });
    return res.status(200).json({ success: true, data: album });
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

export { getAlbums, getAlbumByAlbumId };

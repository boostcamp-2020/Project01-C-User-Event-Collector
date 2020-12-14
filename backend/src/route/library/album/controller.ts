import { Request, Response, NextFunction } from 'express';
import { IJwtPayload } from '../../../middlewares/auth';
import * as libraryAlbumService from '../../../services/library/album';

const getAlbumsByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { id: userId } = req.user as IJwtPayload;
    const albumList = await libraryAlbumService.getAlbumsByUserId(userId);
    res.status(200).json({ success: true, data: albumList });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const addAlbum = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { id: userId } = req.user as IJwtPayload;
    const { albumId } = req.body;
    if (!albumId) return res.status(400).json({ message: 'Parameter Error: albumId' });

    const isSuccess = await libraryAlbumService.addAlbum(userId, albumId);
    if (!isSuccess) return res.status(404).json({ message: 'Album Not Found' });
    return res.status(204).end();
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const deleteAlbum = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { id: userId } = req.user as IJwtPayload;
    const { albumId } = req.params;
    if (!albumId) return res.status(400).json({ message: 'Parameter Error: albumId' });

    const isSuccess = await libraryAlbumService.deleteAlbum(userId, parseInt(albumId, 10));
    if (!isSuccess) return res.status(404).json({ message: 'Album Not Found' });
    return res.status(204).end();
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

export { getAlbumsByUserId, addAlbum, deleteAlbum };

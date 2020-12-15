import { Request, Response, NextFunction } from 'express';
import { IJwtPayload } from '../../../middlewares/auth';
import * as libraryArtistService from '../../../services/library/artist';

const getArtistsByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { id: userId } = req.user as IJwtPayload;
    const artistList = await libraryArtistService.getArtistsByUserId(userId);
    res.status(200).json({ success: true, data: artistList });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const addArtist = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { id: userId } = req.user as IJwtPayload;
    const { artistId } = req.body;
    if (!artistId) return res.status(400).json({ message: 'Parameter Error: artistId' });

    const isSuccess = libraryArtistService.addArtist(userId, artistId);
    if (!isSuccess) return res.status(404).json({ message: 'Artist Not Found' });
    return res.status(204).end();
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

const deleteArtist = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { id: userId } = req.user as IJwtPayload;
    const { artistId } = req.params;
    if (!artistId) return res.status(400).json({ message: 'Parameter Error: artistId' });

    const isSuccess = libraryArtistService.deleteArtist(userId, parseInt(artistId, 10));
    if (!isSuccess) return res.status(404).json({ message: 'Artist Not Found' });
    return res.status(204).end();
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

export { getArtistsByUserId, addArtist, deleteArtist };

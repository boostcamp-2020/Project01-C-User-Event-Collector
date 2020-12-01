import * as express from 'express';
import Album from '../../../entities/Album';

const getAlbums = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  try {
    const albums = await Album.find();
    res.status(200).json({
      success: true,
      data: albums,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export default getAlbums;

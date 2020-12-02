import { Request, Response, NextFunction } from 'express';
import Album from '../../../entities/Album';
import User from '../../../entities/User';

const getAlbumsByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
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

const addAlbum = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    // const { id: userId } = req.user as User;
    const { albumId } = req.body;
    if (!albumId) return res.status(400).json({ message: 'Parameter Error: albumId' });

    const user = (await User.findOne(1, { relations: ['albums'] })) as User;
    const album = (await Album.findOne(albumId)) as Album;
    if (!album) return res.status(404).json({ message: 'Album Not Found' });

    user.albums.push(album);
    await user.save();
    return res.status(204).end();
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const deleteAlbum = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    // const { id: userId } = req.user as User;
    const { albumId } = req.params;
    if (!albumId) return res.status(400).json({ message: 'Parameter Error: albumId' });

    const user = (await User.findOne(1, { relations: ['albums'] })) as User;
    const albumToRemove = (await Album.findOne(albumId)) as Album;
    if (!albumToRemove) return res.status(404).json({ message: 'Album Not Found' });

    user.albums = user.albums.filter(album => album.id !== albumToRemove.id);
    await user.save();
    return res.status(204).end();
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

export { getAlbumsByUserId, addAlbum, deleteAlbum };

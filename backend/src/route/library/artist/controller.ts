import { Request, Response, NextFunction } from 'express';
import User from '../../../entities/User';
import Artist from '../../../entities/Artist';

const getArtistsByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { id: userId } = req.user as User;
    const artistList = await Artist.findByUserId(userId);
    res.status(200).json({
      success: true,
      data: artistList,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const addArtist = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { id: userId } = req.user as User;
    const { artistId } = req.body;
    if (!artistId) return res.status(400).json({ message: 'Parameter Error: artistId' });

    const user = (await User.findOne(userId, { relations: ['artists'] })) as User;
    const artist = (await Artist.findOne(artistId)) as Artist;
    if (!artist) return res.status(404).json({ message: 'Artist Not Found' });

    user.artists.push(artist);
    await user.save();
    return res.status(204).end();
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const deleteArtist = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { id: userId } = req.user as User;
    const { artistId } = req.params;
    if (!artistId) return res.status(400).json({ message: 'Parameter Error: artistId' });

    const user = (await User.findOne(userId, { relations: ['artists'] })) as User;
    const artistToRemove = (await Artist.findOne(artistId)) as Artist;
    if (!artistToRemove) return res.status(404).json({ message: 'Artist Not Found' });

    user.artists = user.artists.filter(artist => artist.id !== artistToRemove.id);
    await user.save();
    return res.status(204).end();
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

export { getArtistsByUserId, addArtist, deleteArtist };

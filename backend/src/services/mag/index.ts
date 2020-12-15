import Mag from '../../entities/Mag';

const getMagazines = (): Promise<Mag[]> => {
  // return Mag.find();
  return Mag.createQueryBuilder('mag')
    .leftJoinAndSelect('mag.tracks', 'track')
    .innerJoinAndSelect('track.album', 'album')
    .innerJoinAndSelect('track.artists', 'artist')
    .getMany();
};

const getMagazineByMagazineId = (magazineId: number): Promise<Mag | undefined> => {
  // return Mag.findOne(magazineId, { relations: ['tracks'] });
  return Mag.createQueryBuilder('mag')
    .leftJoinAndSelect('mag.tracks', 'track')
    .innerJoinAndSelect('track.album', 'album')
    .innerJoinAndSelect('track.artists', 'artist')
    .where('mag.id = :magazineId', { magazineId })
    .getOne();
};

export { getMagazines, getMagazineByMagazineId };

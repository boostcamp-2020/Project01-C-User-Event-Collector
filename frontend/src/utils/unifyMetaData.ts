interface unifiedDataProps {
  title?: string | null;
  date?: string | null;
  genre?: string | null;
  artist?: string | null;
  composer?: string | null;
  songwriter?: string | null;
  imgUrl?: string | null;
}

const result: unifiedDataProps = {
  title: null,
  date: null,
  genre: null,
  artist: null,
  composer: null,
  songwriter: null,
  imgUrl: '@public/images/empty-music-img.png',
};

const unifyMetaData = (type, metaData) => {
  switch (type) {
    case 'artist':
      result.title = metaData?.name;
      result.date = metaData?.debut;
      result.genre = metaData?.genres[0]?.name;
      result.imgUrl = metaData?.imgUrl;
      return result;
    case 'track':
      result.title = metaData?.title;
      result.date = metaData?.album?.date;
      result.artist = metaData?.artists[0]?.name;
      result.songwriter = metaData?.songwriter;
      result.composer = metaData?.composer;
      result.imgUrl = metaData?.album?.imgUrl;
      return result;
    case 'album':
      result.title = metaData?.name;
      result.artist = metaData?.artists?.join(', ');
      result.date = metaData?.date;
      result.genre = metaData?.genres[0]?.name;
      result.imgUrl = metaData?.imgUrl;
      return result;
    case 'playlist':
      result.title = metaData?.name;
      return result;
    default:
      return result;
  }
};

export default unifyMetaData;

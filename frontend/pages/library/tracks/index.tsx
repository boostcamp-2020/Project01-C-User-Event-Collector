import { useState } from 'react';
import MyTrack from '@pages/Library/MyTrack';

import useFetch from '@hooks/useFetch';

function Index() {
  const [trackList, setTrackList] = useState(null);
  useFetch(setTrackList, 'http://localhost:8000/api/library/tracks');

  if (!trackList) {
    return <div>isLoading...</div>;
  }

  return (
    <div>
      <MyTrack trackList={trackList} />
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log('getServerside start!');
  const res = await fetch('http://localhost:8000/api/library/tracks');
  const data = await res.json();
  const trackList = data.data;

  return {
    props: { trackList },
  };
}

export default Index;

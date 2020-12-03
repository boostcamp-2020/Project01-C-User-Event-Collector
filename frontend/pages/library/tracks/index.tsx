import MyTrack from '@pages/Library/MyTrack';
import axios from 'axios';
import useSWR from 'swr';

function Index() {
  console.log('client start!');
  const fetcher = url => axios.get(url).then(res => res.data);
  const apiUrl = 'http://localhost:8000/api/library/tracks';
  const { data, error, mutate } = useSWR(apiUrl, fetcher, { refreshInterval: 500 });
  mutate();
  const trackList = data?.data;

  if (error) {
    return <div>ERROR...</div>;
  }

  if (!data) {
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

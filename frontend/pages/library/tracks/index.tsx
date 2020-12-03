import MyTrack from '@pages/Library/MyTrack';
import axios from 'axios';
import useSWR from 'swr';

function Index() {
  const fetcher = url => axios.get(url).then(res => res.data);
  const apiUrl = 'http://localhost:8000/api/library/tracks';
  const { data, error } = useSWR(apiUrl, fetcher);
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
  const res = await fetch('http://localhost:8000/api/library/tracks');
  const data = await res.json();
  const trackList = data.data;

  return {
    props: { trackList },
  };
}

export default Index;

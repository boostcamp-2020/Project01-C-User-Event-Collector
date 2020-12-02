import MyTrack from '@pages/Library/MyTrack';

const Index = ({ trackList }) => (
  <div>
    <MyTrack trackList={trackList} />
  </div>
);

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:8000/api/library/tracks');
  const data = await res.json();
  const trackList = data.data;

  return {
    props: { trackList },
  };
}

export default Index;

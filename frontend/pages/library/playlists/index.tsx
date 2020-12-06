import MyPlaylist from '@pages/Library/MyPlaylist';

const Index = ({ playlistList }) => (
  <div>
    {console.log('playlist 스타트')}
    <MyPlaylist playlistList={playlistList} />
  </div>
);

export async function getServerSideProps(context) {
  console.log('playlist getServerSideProps 시작');
  const res = await fetch('http://localhost:8000/api/library/playlists');

  const data = await res.json();
  const playlistList = data.data;

  return {
    props: { playlistList },
  };
}

export default Index;

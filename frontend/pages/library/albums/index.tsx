import MyAlbum from '@pages/Library/MyAlbum';

const Index = ({ albumList }) => (
  <div>
    <MyAlbum albumList={albumList} />
  </div>
);

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:8000/api/library/albums');
  const data = await res.json();
  const albumList = data.data;

  return {
    props: { albumList },
  };
}

export default Index;

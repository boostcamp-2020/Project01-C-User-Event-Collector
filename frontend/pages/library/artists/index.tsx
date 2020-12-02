import MyArtist from '@pages/Library/MyArtist';

const Index = ({ artistList }) => (
  <div>
    <MyArtist artistList={artistList} />
  </div>
);

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:8000/api/library/artists');
  const data = await res.json();
  const artistList = data.data;

  return {
    props: { artistList },
  };
}

export default Index;

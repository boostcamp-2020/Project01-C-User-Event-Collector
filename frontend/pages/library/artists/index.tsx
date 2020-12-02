import MyArtist from '@pages/Library/MyArtist';

const Index = ({ artistList }) => (
  <div>
    {console.log('artist 스타트')}
    <MyArtist artistList={artistList} />
  </div>
);

export async function getServerSideProps(context) {
  console.log('artist getServerSideProps 시작');
  const res = await fetch('http://localhost:8000/api/library/artists');
  const data = await res.json();
  const artistList = data.data;

  return {
    props: { artistList },
  };
}

export default Index;

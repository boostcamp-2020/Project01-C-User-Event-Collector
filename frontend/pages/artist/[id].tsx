import { useRouter } from 'next/router';
import ArtistDetail from '../../src/pages/Detail/Artist';

export function Index({ artistInfo }) {
  const router = useRouter();
  console.log('artistInfo : ', artistInfo);
  return (
    <>
      <ArtistDetail artistInfo={artistInfo} />
      <p>{router.query.id}</p>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  console.log(id);
  const apiUrl = `http://localhost:8000/api/artist/${id}`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  const artistInfo = data.data;

  return {
    props: { artistInfo },
  };
}

export default Index;

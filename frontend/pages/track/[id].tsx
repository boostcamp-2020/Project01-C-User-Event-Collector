import { useRouter } from 'next/router';
import TrackDetail from '../../src/pages/Detail/Track';

export function Index({ trackInfo }) {
  const router = useRouter();
  console.log('trackInfo : ', trackInfo);
  return (
    <>
      <TrackDetail trackInfo={trackInfo} />
      <p>{router.query.id}</p>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const apiUrl = `http://localhost:8000/api/track/${id}`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  const trackInfo = data.data;

  return {
    props: { trackInfo },
  };
}

export default Index;

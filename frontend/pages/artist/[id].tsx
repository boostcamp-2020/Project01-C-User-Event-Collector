import { useRouter } from 'next/router';
import api from '@api/index';
import ArtistDetail from '../../src/pages/Detail/Artist';

export function Index({ artistData }) {
  const router = useRouter();
  interface IMoveEventLog {
    eventTime: Date;
    eventName: string;
    parameters: {
      prev: string;
      next: string;
    };
  }

  const logData: IMoveEventLog = {
    eventTime: new Date(),
    eventName: 'move_event',
    parameters: { prev: '.', next: router.asPath },
  };
  api.post('/log', logData);

  return (
    <>
      <ArtistDetail artistInfo={artistData} />
    </>
  );
}

export async function getStaticPaths() {
  const data = await api.get(`/artist/`).then(res => res.data);
  const artistData = data.data;
  const paths = artistData.map(artist => ({
    params: { id: String(artist.id) },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const data = await api.get(`/artist/${params.id}`).then(res => res.data);
  const artistData = data.data;
  if (!data) {
    return {
      notfound: true,
    };
  }
  return {
    props: { artistData },
  };
};

export default Index;

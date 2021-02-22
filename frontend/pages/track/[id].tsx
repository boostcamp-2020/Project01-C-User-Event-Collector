import { useRouter } from 'next/router';
import api from '@api/index';
import TrackDetail from '../../src/pages/Detail/Track';

export function Index({ trackData }) {
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
      <TrackDetail trackInfo={trackData} />
    </>
  );
}

export async function getStaticPaths() {
  const data = await api.get(`/track/`).then(res => res.data);
  const trackData = data.data;
  const paths = trackData.map(track => ({
    params: { id: String(track.id) },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const data = await api.get(`/track/${params.id}`).then(res => res.data);
  const trackData = data.data;
  if (!data) {
    return {
      notfound: true,
    };
  }
  return {
    props: { trackData },
  };
};

export default Index;

import { useRouter } from 'next/router';
import api from '@api/index';
import MegazineDetail from '../../src/pages/Detail/Magazine';

export function Index({ magazineData }) {
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
      <MegazineDetail magazineInfo={magazineData} />
    </>
  );
}

export async function getStaticPaths() {
  const data = await api.get(`/magazine/`).then(res => res.data);
  const magazineData = data.data;
  const paths = magazineData.map(magazine => ({
    params: { id: String(magazine.id) },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const data = await api.get(`/magazine/${params.id}`).then(res => res.data);
  const magazineData = data.data;
  if (!data) {
    return {
      notfound: true,
    };
  }
  return {
    props: { magazineData },
  };
};

export default Index;

import { useRouter } from 'next/router';
import api from '@api/index';
import AlbumDetail from '../../src/pages/Detail/Album';

export function Index({ albumData }) {
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
      <AlbumDetail albumInfo={albumData} />
    </>
  );
}

export async function getStaticPaths() {
  const data = await api.get(`/album/`).then(res => res.data);
  const albumData = data.data;
  const paths = albumData.map(album => ({
    params: { id: String(album.id) },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const data = await api.get(`/album/${params.id}`).then(res => res.data);
  const albumData = data.data;
  if (!data) {
    return {
      notfound: true,
    };
  }
  return {
    props: { albumData },
  };
};

export default Index;

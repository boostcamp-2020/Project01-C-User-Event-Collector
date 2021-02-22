import { useRouter } from 'next/router';
import api from '@api/index';
import PlaylistDetail from '../../src/pages/Detail/Playlist';

export function Index({ playlistData }) {
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
      <PlaylistDetail playlistInfo={playlistData} />
    </>
  );
}

export async function getStaticPaths() {
  const data = await api.get(`/playlist/`).then(res => res.data);
  const playlistData = data.data;
  const paths = playlistData.map(playlist => ({
    params: { id: String(playlist.id) },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const data = await api.get(`/playlist/${params.id}`).then(res => res.data);
  const playlistData = data.data;
  if (!data) {
    return {
      notfound: true,
    };
  }
  return {
    props: { playlistData },
  };
};

export default Index;

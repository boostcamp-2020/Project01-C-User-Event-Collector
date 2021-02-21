import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import useFetch from '@hooks/useFetch';
import api from '@api/index';
import Spinner from '@components/Common/Spinner';
import getRefererFromHeader from '@utils/getRefererFromHeader';
import Playlistdetail from '../../src/pages/Detail/Playlist';

export function Index({ referer }) {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useFetch(`/playlist/${id}`, null);

  if (isLoading) return <Spinner />;
  if (isError) {
    console.log(isError);
    return <div>...Error</div>;
  }

  const logData = {
    eventTime: new Date(),
    eventName: 'move_event',
    parameters: { prev: referer, next: router.asPath },
  };
  api.post('/log', logData);

  return (
    <>
      <Playlistdetail playlistInfo={data.data} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const referer = getRefererFromHeader(req.headers);
  return { props: { referer } };
};

export default Index;

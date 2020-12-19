import { useRouter } from 'next/router';
import useFetch from '@hooks/useFetch';
import api from '@api/index';
import Spinner from '@components/Common/Spinner';
import getRefererFromHeader from '@utils/getRefererFromHeader';
import TrackDetail from '../../src/pages/Detail/Track';

export function Index({ referer }) {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useFetch(`/track/${id}`, null);

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
      <TrackDetail trackInfo={data.data} />
    </>
  );
}

export async function getServerSideProps({ req }) {
  const referer = getRefererFromHeader(req.headers);
  return { props: { referer } };
}

export default Index;

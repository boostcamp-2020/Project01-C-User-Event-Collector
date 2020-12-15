import { useRouter } from 'next/router';
import useFetch from '@hooks/useFetch';
import api from '@api/index';
import Spinner from '@components/Common/Spinner';
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
    eventName: 'MoveEvent',
    parameters: { prev: referer || 'external', next: router.asPath },
  };
  api.post('/log', logData);

  console.log('useFetch track/id hook 시작!');
  console.log('data : ', data);
  console.log('data.data : ', data.data);
  return (
    <>
      <TrackDetail trackInfo={data.data} />
    </>
  );
}

export async function getServerSideProps({ req }) {
  const regex = /(http:\/\/)([A-Z,a-z,:,0-9]*)/;
  const host = req.headers?.referer?.match(regex)[0];
  const referer = req.headers?.referer?.slice(host.length);

  return { props: { referer: referer || 'external' } };
}

export default Index;

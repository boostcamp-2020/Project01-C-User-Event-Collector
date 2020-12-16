import { useRouter } from 'next/router';
import useFetch from '@hooks/useFetch';
import api from '@api/index';
import Spinner from '@components/Common/Spinner';
import MagazineDetail from '../../src/pages/Detail/Magazine';

export function Index({ referer }) {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useFetch(`/magazine/${id}`, null);

  if (isLoading) return <Spinner />;
  if (isError) {
    console.log(isError);
    return <div>...Error</div>;
  }

  const logData = {
    eventTime: new Date(),
    eventName: 'move_event',
    parameters: { prev: referer || 'external', next: router.asPath },
  };
  api.post('/log', logData);

  return (
    <>
      <MagazineDetail magazineInfo={data.data} />
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

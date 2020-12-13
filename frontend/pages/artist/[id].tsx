import { useRouter } from 'next/router';
import useFetch from '@hooks/useFetch';
import api from '@api/index';
import ArtistDetail from '../../src/pages/Detail/Artist';

export function Index({ referer }) {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useFetch(`/artist/${id}`);

  if (isLoading) return <div>...Loading</div>;
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

  console.log('useFetch artist/id hook 시작! : ', new Date());
  console.log('data : ', data);
  console.log('data.data : ', data.data);
  return (
    <>
      <ArtistDetail artistInfo={data.data} />
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

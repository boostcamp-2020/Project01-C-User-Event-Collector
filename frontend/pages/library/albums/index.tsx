import { useRouter } from 'next/router';
import MyAlbum from '@pages/Library/MyAlbum';
import useFetch from '@hooks/useFetch';
import api from '@api/index';

function Index({ referer }) {
  const router = useRouter();
  let token: string | null = '';
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token');
  }
  const { data, isLoading, isError } = useFetch(`/library/albums`, token);
  if (isLoading) return <div>...Loading</div>;
  if (isError) {
    console.log(isError);
    return <div>...Error</div>;
  }

  console.log('useFetch-albums hook 시작!');
  console.log('data : ', data);
  console.log('data.data : ', data.data);

  const logData = {
    eventTime: new Date(),
    eventName: 'MoveEvent',
    parameters: { prev: referer || 'external', next: router.asPath },
  };
  api.post('/log', logData);

  return (
    <div>
      <MyAlbum albumList={data.data} />
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const regex = /(http:\/\/)([A-Z,a-z,:,0-9]*)/;
  const host = req.headers?.referer?.match(regex)[0];
  const referer = req.headers?.referer?.slice(host.length);

  return { props: { referer: referer || 'external' } };
}

export default Index;

import { useRouter } from 'next/router';
import useFetch from '@hooks/useFetch';
import api from '@api/index';
import Today from '../src/pages/Today';

function Index({ token, referer }) {
  const router = useRouter();
  const { data: mag, isLoading: magLoading, isError: magError } = useFetch(`/magazine`);
  const { data: playlist, isLoading: playLoading, isError: playError } = useFetch(`/playlist`);

  if (magLoading || playLoading) return <div>...Loading</div>;
  if (magError || playError) return <div>...Error</div>;

  console.log('useFetch-today hook 시작!');
  console.log('data : ', mag);
  console.log('data.data : ', mag.data);

  // 쿠키를 로컬 스토리지에 담는 코드
  localStorage.setItem('token', token);

  const logData = {
    eventTime: new Date(),
    eventName: 'MoveEvent',
    parameters: { prev: referer || 'external', next: router.asPath },
  };
  api.post('/log', logData);

  return (
    <div>
      <Today magList={mag.data} playlistList={playlist.data} />
    </div>
  );
}

export async function getServerSideProps({ req }) {
  // 브라우저의 document.cookie에 접근하는 코드
  const cookie = req.headers.cookie ? req.headers.cookie : null;
  const tokenFromCookie = cookie
    ? cookie
        .split('; ')
        .find(row => row.startsWith('token'))
        .split('=')[1]
    : null;
  return { props: { token: tokenFromCookie } };
}

export default Index;

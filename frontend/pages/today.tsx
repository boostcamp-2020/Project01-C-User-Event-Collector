import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useFetch from '@hooks/useFetch';
import api from '@api/index';
import Modal from '@components/Common/Modal';
import { useAuthDispatch } from '@context/AuthContext';
import Spinner from '@components/Common/Spinner';
import Today from '../src/pages/Today';

function Index({ token, referer }) {
  const router = useRouter();
  const dispatch = useAuthDispatch();

  const { data: user, isLoading: userLoading, isError: userError } = useFetch(`/user`, token);
  const { data: mag, isLoading: magLoading, isError: magError } = useFetch(`/magazine`, token);
  const { data: playlist, isLoading: playLoading, isError: playError } = useFetch(
    `/playlist`,
    token,
  );

  useEffect(() => {
    if (typeof user?.user !== 'undefined' && user?.user) {
      dispatch({
        type: 'SET_USERINFO',
        userInfo: user.user,
      });
    } else {
      dispatch({
        type: 'DELETE_USERINFO',
      });
    }
  }, [dispatch]);

  if (magLoading || playLoading || userLoading) return <Spinner />;
  if (magError || playError || userError) return <div>...Error</div>;

  // 쿠키를 로컬 스토리지에 담는 코드
  localStorage.setItem('token', token);

  const logData = {
    eventTime: new Date(),
    eventName: 'move_event',
    parameters: { prev: referer || 'external', next: router.asPath },
  };
  api.post('/log', logData);

  return (
    <div>
      <Modal />
      <Today magList={mag.data} playlistList={playlist.data} />
    </div>
  );
}

export async function getServerSideProps({ req }) {
  // 브라우저의 document.cookie에 접근하는 코드
  const regex = /(http:\/\/)([A-Z,a-z,:,.,0-9]*)/;
  const host = req.headers?.referer?.match(regex)[0];
  const referer = req.headers?.referer?.slice(host.length);

  const cookie = req.headers?.cookie;
  const tokenFromCookie = cookie
    ?.split('; ')
    ?.find(row => row.startsWith('token'))
    ?.split('=')[1];

  return {
    props: {
      token: typeof tokenFromCookie === 'undefined' ? null : tokenFromCookie,
      referer: referer || 'external',
    },
  };
}

export default Index;

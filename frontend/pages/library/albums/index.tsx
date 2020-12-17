import { useRouter } from 'next/router';
import MyAlbum from '@pages/Library/MyAlbum';
import useFetch from '@hooks/useFetch';
import api from '@api/index';
import Spinner from '@components/Common/Spinner';

import { useEffect } from 'react';
import { useAuthDispatch } from '@context/AuthContext';

function Index({ referer, token }) {
  const router = useRouter();
  const dispatch = useAuthDispatch();

  const { data: user, isLoading: userLoading, isError: userError } = useFetch(`/user`, token);
  const { data, isLoading, isError } = useFetch(`/library/albums`, token);

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

  if (isLoading || userLoading) return <Spinner />;
  if (isError || userError) {
    console.log(isError);
    return <div>...Error</div>;
  }

  // 쿠키를 로컬 스토리지에 담는 코드
  localStorage.setItem('token', token);

  console.log('useFetch-albums hook 시작!');
  console.log('data : ', data);
  console.log('data.data : ', data.data);

  const logData = {
    eventTime: new Date(),
    eventName: 'move_event',
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

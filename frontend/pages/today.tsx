import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import useFetch from '@hooks/useFetch';
import api from '@api/index';
import Modal from '@components/Common/Modal';
import { useAuthDispatch } from '@context/AuthContext';
import Spinner from '@components/Common/Spinner';
import getTokenFromCookie from '@utils/getTokenFromCookie';
import getRefererFromHeader from '@utils/getRefererFromHeader';
import Today from '../src/pages/Today';

function Index({ token, referer, magList }) {
  const router = useRouter();
  const dispatch = useAuthDispatch();
  const { data: user, isLoading: userLoading, isError: userError } = useFetch(`/user`, token);
  const { data: playlist, isLoading: playLoading, isError: playError } = useFetch(
    `/playlist`,
    token,
  );

  useEffect(() => {
    localStorage.setItem('token', token);
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

  if (playLoading || userLoading) return <Spinner />;
  if (playError || userError) throw new Error('Data Fetch Error');

  api.post('/log', {
    eventTime: new Date(),
    eventName: 'move_event',
    parameters: { prev: referer, next: router.asPath },
  });

  return (
    <div>
      <Modal />
      <Today magList={magList} playlistList={playlist.data} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const referer = getRefererFromHeader(req.headers);
  const cookie = getTokenFromCookie(req.headers);

  api.defaults.headers.authorization = cookie;
  const magList = await api.get('/magazine').then(res => res.data.data);

  return {
    props: {
      token: cookie,
      referer,
      magList,
    },
  };
};

export default Index;

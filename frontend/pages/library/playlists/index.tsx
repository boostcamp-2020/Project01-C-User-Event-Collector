import { useRouter } from 'next/router';
import MyPlaylist from '@pages/Library/MyPlaylist';
import useFetch from '@hooks/useFetch';
import api from '@api/index';
import Spinner from '@components/Common/Spinner';

import { useEffect } from 'react';
import { useAuthDispatch } from '@context/AuthContext';
import getTokenFromCookie from '@utils/getTokenFromCookie';
import getRefererFromHeader from '@utils/getRefererFromHeader';

function Index({ referer, token }) {
  const router = useRouter();
  const dispatch = useAuthDispatch();

  const { data: user, isLoading: userLoading, isError: userError } = useFetch(`/user`, token);
  const { data, isLoading, isError } = useFetch(`/library/playlists`, token);

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

  if (isLoading || userLoading) return <Spinner />;
  if (isError || userError) {
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
    <div>
      <MyPlaylist playlistList={data.data} />
    </div>
  );
}
export async function getServerSideProps({ req }) {
  const referer = getRefererFromHeader(req.headers);
  const token = getTokenFromCookie(req.headers);

  return {
    props: {
      token,
      referer,
    },
  };
}

export default Index;

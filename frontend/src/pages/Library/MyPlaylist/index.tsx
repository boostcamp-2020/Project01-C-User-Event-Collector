import styled from '@styles/themed-components';
import { useEffect } from 'react';
import { useAuthDispatch, useAuthState } from '@context/AuthContext';
import Library from '@components/Template/Library';
import PlaylistList from '@components/PlaylistList';

const MyPlaylist = ({ playlistList }) => {
  const state = useAuthState();
  const dispatch = useAuthDispatch();
  const {
    userInfo: { isLoggedIn },
  } = state;

  useEffect(() => {
    if (playlistList)
      dispatch({
        type: 'SET_PLAYLISTLIST',
        playlistList: playlistList.map(playlist => playlist.id),
      });
  }, [dispatch]);

  return (
    <Library mainTitle="플레이리스트">
      <Container>
        {isLoggedIn ? (
          <PlaylistList playlistList={playlistList} />
        ) : (
          <div
            style={{ textAlign: 'center', fontSize: '13px', position: 'relative', top: '100px' }}
          >
            로그인이 필요한 서비스입니다.
          </div>
        )}
      </Container>
    </Library>
  );
};

const Container = styled.div``;

export default MyPlaylist;

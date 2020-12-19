import styled from '@styles/themed-components';
import { useEffect } from 'react';
import { useAuthDispatch } from '@context/AuthContext';
import Library from '@components/Template/Library';
import PlaylistList from '@components/PlaylistList';

const MyArtist = ({ playlistList }) => {
  const dispatch = useAuthDispatch();

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
        <PlaylistList playlistList={playlistList} />
      </Container>
    </Library>
  );
};

const Container = styled.div``;

export default MyArtist;

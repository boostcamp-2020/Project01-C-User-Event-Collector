import styled from '@styles/themed-components';
import { useEffect } from 'react';
import { useAuthDispatch, useAuthState } from '@context/AuthContext';
import Library from '@components/Template/Library';
import PlaylistList from '@components/PlaylistList';

const MyArtist = ({ playlistList }) => {
  const state = useAuthState();
  const dispatch = useAuthDispatch();

  useEffect(() => {
    if (playlistList)
      dispatch({
        type: 'SET_PLAYLISTLIST',
        playlistList: playlistList.map(playlist => playlist.id),
      });
  }, [dispatch]);
  console.log('-----playlist state---*** : ', state);

  return (
    <Library mainTitle="앨범">
      <Container>
        <PlaylistList playlistList={playlistList} />
      </Container>
    </Library>
  );
};

const Container = styled.div``;

export default MyArtist;

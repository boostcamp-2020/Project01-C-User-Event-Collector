import styled from '@styles/themed-components';
import { useEffect } from 'react';
import { useAuthDispatch, useAuthState } from '@context/AuthContext';
import Library from '@components/Template/Library';
import ArtistList from '@components/ArtistList';

const MyArtist = ({ artistList }) => {
  const state = useAuthState();
  const dispatch = useAuthDispatch();

  useEffect(() => {
    if (artistList)
      dispatch({ type: 'SET_ARTISTLIST', artistList: artistList.map(artist => artist.id) });
  }, [dispatch]);
  console.log('-----artist state---*** : ', state);

  return (
    <Library mainTitle="아티스트">
      <Container>
        <ArtistList artistList={artistList} />
      </Container>
    </Library>
  );
};

const Container = styled.div``;

export default MyArtist;

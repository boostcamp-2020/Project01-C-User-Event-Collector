import styled from '@styles/themed-components';
import { useEffect } from 'react';
import { useAuthDispatch } from '@context/AuthContext';
import Library from '@components/Template/Library';
import ArtistList from '@components/ArtistList';

const MyArtist = ({ artistList }) => {
  const dispatch = useAuthDispatch();

  useEffect(() => {
    if (artistList)
      dispatch({ type: 'SET_ARTISTLIST', artistList: artistList.map(artist => artist.id) });
  }, [dispatch]);

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

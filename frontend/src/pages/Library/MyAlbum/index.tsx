import styled from '@styles/themed-components';
import { useEffect } from 'react';
import { useAuthDispatch } from '@context/AuthContext';
import Library from '@components/Template/Library';
import AlbumList from '@components/AlbumList';

const MyAlbum = ({ albumList }) => {
  const dispatch = useAuthDispatch();

  useEffect(() => {
    if (albumList) dispatch({ type: 'SET_ALBUMLIST', albumList: albumList.map(album => album.id) });
  }, [dispatch]);

  return (
    <Library mainTitle="앨범">
      <Container>
        <AlbumList albumList={albumList} />
      </Container>
    </Library>
  );
};

const Container = styled.div``;

export default MyAlbum;

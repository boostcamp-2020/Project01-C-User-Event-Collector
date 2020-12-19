import styled from '@styles/themed-components';
import { useEffect } from 'react';
import { useAuthDispatch, useAuthState } from '@context/AuthContext';
import Library from '@components/Template/Library';
import AlbumList from '@components/AlbumList';

const MyAlbum = ({ albumList }) => {
  const state = useAuthState();
  const dispatch = useAuthDispatch();
  const {
    userInfo: { isLoggedIn },
  } = state;

  useEffect(() => {
    if (albumList) dispatch({ type: 'SET_ALBUMLIST', albumList: albumList.map(album => album.id) });
  }, [dispatch]);

  return (
    <Library mainTitle="앨범">
      <Container>
        {isLoggedIn ? (
          <AlbumList albumList={albumList} />
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

export default MyAlbum;

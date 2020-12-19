import styled from '@styles/themed-components';
import { useEffect } from 'react';
import { useAuthDispatch, useAuthState } from '@context/AuthContext';
import Library from '@components/Template/Library';
import ArtistList from '@components/ArtistList';

const MyArtist = ({ artistList }) => {
  const state = useAuthState();
  const dispatch = useAuthDispatch();
  const {
    userInfo: { isLoggedIn },
  } = state;

  useEffect(() => {
    if (artistList)
      dispatch({ type: 'SET_ARTISTLIST', artistList: artistList.map(artist => artist.id) });
  }, [dispatch]);

  return (
    <Library mainTitle="아티스트">
      <Container>
        {isLoggedIn ? (
          <ArtistList artistList={artistList} />
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

export default MyArtist;

import React from 'react';
import styled from '@styles/themed-components';

import ArtistCard from '@components/Common/Card/ArtistCard';
import { useAuthState } from '@context/AuthContext';

const ArtistList = ({ artistList }) => {
  const state = useAuthState();
  const { userInfo } = state;

  return (
    <>
      {!userInfo.isLoggedIn && (
        <div style={{ textAlign: 'center', fontSize: '13px', position: 'relative', top: '100px' }}>
          로그인이 필요한 서비스입니다.
        </div>
      )}
      {userInfo.isLoggedIn && (
        <ListContainer>
          {artistList
            ? artistList?.map(artist => (
              <ArtistCard key={artist.id} artistMetaData={artist} type="myArtist" />
              ))
            : null}
        </ListContainer>
      )}
    </>
  );
};

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${props => props.theme.size.smallCarouselContentWidth}, 1fr)
  );
  grid-gap: 45px 0;
`;

export default ArtistList;

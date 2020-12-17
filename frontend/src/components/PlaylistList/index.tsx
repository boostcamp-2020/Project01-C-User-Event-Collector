import React from 'react';
import styled from '@styles/themed-components';

import AlbumCard from '@components/Common/Card/PlaylistCard';
import { useAuthState } from '@context/AuthContext';

const PlaylistList = ({ playlistList }) => {
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
          {playlistList
            ? playlistList.map(playlist => (
                <AlbumCard key={playlist.id} playlistMetaData={playlist} />
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

export default PlaylistList;

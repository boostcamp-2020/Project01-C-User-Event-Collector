import React from 'react';
import styled from '@styles/themed-components';

import AlbumCard from '@components/Common/Card/PlaylistCard';

const PlaylistList = ({ playlistList }) => {
  return (
    <ListContainer>
      {playlistList.map(playlist => (
        <AlbumCard key={playlist.id} playlistMetaData={playlist} />
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${props => props.theme.size.smallCarouselContentWidth}, 1fr)
  );
`;

export default PlaylistList;

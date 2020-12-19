import React from 'react';
import styled from '@styles/themed-components';
import PlaylistCard from '@components/Common/Card/PlaylistCard';

const PlaylistList = ({ playlistList }) => {
  return (
    <ListContainer>
      {playlistList
        ? playlistList.map(playlist => (
          <PlaylistCard key={playlist.id} playlistMetaData={playlist} />
          ))
        : null}
    </ListContainer>
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

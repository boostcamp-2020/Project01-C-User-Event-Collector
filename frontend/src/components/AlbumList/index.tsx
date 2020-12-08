import React from 'react';
import styled from '@styles/themed-components';

import AlbumCard from '@components/Common/Card/AlbumCard';

const AlbumList = ({ albumList }) => {
  return (
    <ListContainer>
      {albumList.map(album => (
        <AlbumCard key={album.id} albumMetaData={album} />
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

export default AlbumList;

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
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export default AlbumList;

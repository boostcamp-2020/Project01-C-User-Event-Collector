import React from 'react';
import styled from '@styles/themed-components';

import ArtistCard from '@components/Common/Card/ArtistCard';

const ArtistList = ({ artistList }) => {
  return (
    <ListContainer>
      {artistList.map(artist => (
        <ArtistCard key={artist.id} artistMetaData={artist} />
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default ArtistList;

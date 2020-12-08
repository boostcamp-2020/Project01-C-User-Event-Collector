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
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: space-between;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${props => props.theme.size.smallCarouselContentWidth}, 1fr)
  );
`;

export default ArtistList;

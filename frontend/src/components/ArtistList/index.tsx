import React from 'react';
import styled from '@styles/themed-components';
import ArtistCard from '@components/Common/Card/ArtistCard';

const ArtistList = ({ artistList }) => {
  return (
    <ListContainer>
      {artistList
        ? artistList?.map(artist => (
          <ArtistCard key={artist.id} artistMetaData={artist} type="myArtist" />
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

export default ArtistList;

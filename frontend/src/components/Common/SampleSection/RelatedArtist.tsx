import React from 'react';
import styled from '@styles/themed-components';
import useFetch from '@hooks/useFetch';
import ArtistCard from '@components/Common/Card/ArtistCard';

function RelatedArtist() {
  const { data, isLoading, isError } = useFetch(`/artist`, null);

  if (isLoading) return <div>...Loading</div>;
  if (isError) {
    console.log(isError);
    return <div>...Error</div>;
  }
  const artists = data.data;
  console.log('myartists : ', artists);

  return (
    <SectionContentWrapper>
      {artists &&
        artists.splice(0, 4).map(artist => (
          <ArtistWrapper key={artist.id}>
            <ArtistCard artistMetaData={artist} />
          </ArtistWrapper>
        ))}
    </SectionContentWrapper>
  );
}

const SectionContentWrapper = styled.div`
  width: 100%;
  margin-top: 28px;
  display: flex;
`;

const ArtistWrapper = styled.div`
  text-align: left;
  margin-right: 20px;
`;

export default RelatedArtist;

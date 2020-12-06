import React from 'react';
import styled from '@styles/themed-components';
import DetailTemplate from '@components/Template/Detail';

interface IArtistInfoProps {
  artistInfo?: MetaArtist;
}

type MetaArtist = {
  id: number;
  imgUrl: string;
  name: string;
  debut: string;
  genres: any[];
};

function ArtistDetail({ artistInfo: artist }: IArtistInfoProps) {
  return (
    <DetailTemplate type="artist" metaData={artist}>
      <Wrapper />
    </DetailTemplate>
  );
}

const Wrapper = styled.div`
  padding-bottom: 200px;
`;

export default ArtistDetail;

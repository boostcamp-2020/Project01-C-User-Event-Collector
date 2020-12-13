import React from 'react';
import styled from '@styles/themed-components';
import DetailTemplate from '@components/Template/Detail';
import unifyMetaData from '@utils/unifyMetaData';

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
    <DetailTemplate data={unifyMetaData('artist', artist)}>
      <Wrapper />
    </DetailTemplate>
  );
}

const Wrapper = styled.div`
  padding-bottom: 50px;
`;

export default ArtistDetail;

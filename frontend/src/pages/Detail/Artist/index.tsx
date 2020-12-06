import React from 'react';
import styled from '@styles/themed-components';

import BoxItem from '@components/Common/BoxItem';

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

function ArtistDetail({ artistInfo: data }: IArtistInfoProps) {
  return (
    <Wrapper>
      <TopWrapper />
      <BoxItem />
    </Wrapper>
  );
}

const TopWrapper = styled.div`
  padding: 40px 120px;
  background-color: ${props => props.theme.color.lightgrey};
`;

const Wrapper = styled.div`
  padding-bottom: 200px;
`;

export default ArtistDetail;

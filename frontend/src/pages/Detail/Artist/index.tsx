import React from 'react';
import styled from '@styles/themed-components';
import DetailTemplate from '@components/Template/Detail';
import unifyMetaData from '@utils/unifyMetaData';
import Section from '@components/Common/Section';
import RelatedPlaylist from '@components/Common/SampleSection/RelatedPlaylist';
import RelatedArtist from '@components/Common/SampleSection/RelatedArtist';

interface IArtistInfoProps {
  artistInfo?: MetaArtist;
}

type MetaArtist = {
  id: number;
  imgUrl: string;
  name: string;
  debut: string;
  genres?: any;
  tracks?: any;
};

function ArtistDetail({ artistInfo: artist }: IArtistInfoProps) {
  console.log('myartist ::: ', artist);
  return (
    <DetailTemplate data={unifyMetaData('artist', artist)}>
      <Wrapper>
        <Section>
          <p className="section-title">비슷한 아티스트</p>
          <RelatedArtist />
        </Section>
        <Section>
          <p className="section-title">관련 플레이 리스트</p>
          <RelatedPlaylist />
        </Section>
      </Wrapper>
    </DetailTemplate>
  );
}

const Wrapper = styled.div`
  padding-bottom: 50px;
`;

export default ArtistDetail;

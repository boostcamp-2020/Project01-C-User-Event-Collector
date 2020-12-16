import React from 'react';
import styled from '@styles/themed-components';

import Section from '@components/Common/Section';
import CircleImage from '@components/Common/CircleImage';
import RelatedPlaylist from '@components/Common/SampleSection/RelatedPlaylist';
import RelatedArtist from '@components/Common/SampleSection/RelatedArtist';
import TrackList from '@components/TrackList';

import getMultipleNames from '@utils/getMultipleNames';
import AlbumList from '@components/AlbumList';

// interface IArtistInfoProps {
//   artistInfo?: MetaArtist;
// }

// type MetaArtist = {
//   id: number;
//   imgUrl: string;
//   name: string;
//   debut: string;
//   genres?: any;
//   tracks?: any;
// };

function ArtistDetail({ artistInfo: artist }) {
  console.log('myartist ::: ', artist);
  return (
    <Container>
      <Header>
        <HeaderImgWrapper>
          <CircleImage imageSrc={artist.imgUrl} alt="detail-header-img" />
        </HeaderImgWrapper>
        <HeaderContent>
          <MainTitle>{artist.name}</MainTitle>
          <SubTitle>{artist.debut.slice(0, 10)} 데뷔 · {getMultipleNames(artist.genres)}</SubTitle>
        </HeaderContent>
      </Header>
      <Wrapper>
        <Section>
          <p className="section-title">노래</p>
          <TrackList trackList={artist.tracks}/>
        </Section>
        <Section>
          <p className="section-title">앨범</p>
          <AlbumList albumList={artist.albums}/>
        </Section>
        <Section>
          <p className="section-title">비슷한 아티스트</p>
          <RelatedArtist />
        </Section>
        <Section>
          <p className="section-title">관련 플레이 리스트</p>
          <RelatedPlaylist />
        </Section>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 41px;
  margin: auto;
  position: relative;
  max-width: ${props => props.theme.size.mainContentWidth};
  margin: auto;
`;

const Wrapper = styled.div`
  padding-bottom: 50px;
`;


const HeaderImgWrapper = styled.div`
  width: 195px;
  height: 195px;
`;

const Header = styled.header`
  position: relative;
  padding: 20px 0 50px 0;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  justify-content: space-between;
`;

const HeaderContent = styled.div`
  position: relative;
  width: 750px;
  display: flex;
  flex-direction: column;

  margin-top: 1rem;
  margin-left: 2rem;
`;

const MainTitle = styled.span`
  display: block;
  ${props => props.theme.font.boldTitle}
`;

const SubTitle = styled.span`
  ${props => props.theme.font.plain}
  font-size: 15px;
  padding: 10px 0;
`;

export default ArtistDetail;

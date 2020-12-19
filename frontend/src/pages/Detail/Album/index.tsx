import React from 'react';
import styled from '@styles/themed-components';

import LargeButton from '@components/Common/Button/LargeButton';
import Section from '@components/Common/Section';
import RelatedPlaylist from '@components/Common/SampleSection/RelatedPlaylist';
import RelatedArtist from '@components/Common/SampleSection/RelatedArtist';
import TrackList from '@components/TrackList';

import getMultipleNames from '@utils/getMultipleNames';
import description from '../../../data/DescriptionSample';

function AlbumDetail({ albumInfo: album }) {
  return (
    <Container>
      <Header>
        <HeaderImg src={album?.imgUrl} alt="detail-header-img" />
        <HeaderContent>
          <MainTitle>{album?.name}</MainTitle>
          <SubTitle>{`${getMultipleNames(album?.artists)} `}</SubTitle>
          <SubContent>
            {album?.date?.slice(0, 10)}
{' '}
·{getMultipleNames(album?.genres)}
          </SubContent>
          <SubContent>{description}</SubContent>
          <ButtonsWrapper>
            <LargeButton customType="play" />
            <LargeButton customType="shuffle" />
            <LargeButton customType="mp3" />
          </ButtonsWrapper>
        </HeaderContent>
      </Header>
      <Wrapper>
        <AddPlayListButtonWrapper>
          <LargeButton customType="addToFirst" />
          <LargeButton customType="addToLast" />
        </AddPlayListButtonWrapper>
        <Section>
          <SectionContentWrapper>
            <TrackList trackList={album?.tracks} />
          </SectionContentWrapper>
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

const HeaderImg = styled.img`
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

const SubContent = styled.span`
  ${props => props.theme.font.sub}
  padding-bottom: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  button {
    margin-right: 10px;
  }
`;

const Wrapper = styled.div`
  padding-top: 34px;
  padding-bottom: 50px;
`;

const SectionContentWrapper = styled.div`
  width: 100%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
`;

const AddPlayListButtonWrapper = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-between;
`;

export default AlbumDetail;

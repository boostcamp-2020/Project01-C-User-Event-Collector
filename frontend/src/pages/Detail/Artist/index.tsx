import React from 'react';
import styled from '@styles/themed-components';

import Section from '@components/Common/Section';
import CircleImage from '@components/Common/CircleImage';
import RelatedPlaylist from '@components/Common/SampleSection/RelatedPlaylist';
import RelatedArtist from '@components/Common/SampleSection/RelatedArtist';
import TrackList from '@components/TrackList';

import getMultipleNames from '@utils/getMultipleNames';
import AlbumList from '@components/AlbumList';

import { IoMdHeartEmpty } from 'react-icons/io';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

function ArtistDetail({ artistInfo: artist }) {
  console.log('myartist ::: ', artist);
  return (
    <Container>
      <Header>
        <HeaderImgWrapper>
          <CircleImage imageSrc={artist.imgUrl} alt="detail-header-img" />
        </HeaderImgWrapper>
        <HeaderContent>
          <TopContainer>
            <MainTitle>{artist.name}</MainTitle>
            <SubTitle>{artist.debut.replace(/-/g, '.').slice(0, 10)} 데뷔 · {getMultipleNames(artist.genres)}</SubTitle>
          </TopContainer>
          <BottomContainer>
            <ButtonWrapper>
              <ButtonContainer>
                <IoMdHeartEmpty size={24} color={'575757'} />
              </ButtonContainer>
              <ButtonContainer>
                <HiOutlineDotsHorizontal size={24} color={'575757'} />
              </ButtonContainer>
            </ButtonWrapper>
          </BottomContainer>
        </HeaderContent>
      </Header>
      <Wrapper>
        {artist.tracks.length > 0 &&
          (<Section>
            <SectionTitle>노래</SectionTitle>
            <TrackList type={true} trackList={artist.tracks} />
          </Section>)
        }
        {artist.albums.length > 0 &&
          (<Section>
            <SectionTitle>앨범</SectionTitle>
            <AlbumList albumList={artist.albums} />
          </Section>)
        }
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
  width: 196px;
  height: auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 0 50px 0;
  border-bottom: 1px solid #e4e4e4;
`;

const HeaderContent = styled.div`
  position: relative;
  width: 750px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 1rem;
  margin-left: 2rem;
`;

const MainTitle = styled.span`
  display: block;
  ${props => props.theme.font.boldTitle}
`;

const SubTitle = styled.div`
  ${props => props.theme.font.plain}
  font-size: 15px;
  padding: 10px 0;
`;

const SectionTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  padding-bottom: 1rem;
`;

const TopContainer = styled.div`
`;

const BottomContainer = styled.div`
`;

const ButtonWrapper = styled.div`
  width: 74px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  cursor: pointer;
`;

export default ArtistDetail;

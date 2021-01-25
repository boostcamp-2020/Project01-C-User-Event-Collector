import React, { useState, useEffect } from 'react';
import styled from '@styles/themed-components';

import Section from '@components/Common/Section';
import CircleImage from '@components/Common/CircleImage';
import RelatedPlaylist from '@components/Common/SampleSection/RelatedPlaylist';
import RelatedArtist from '@components/Common/SampleSection/RelatedArtist';
import TrackList from '@components/TrackList';
import useEventHandler from '@hooks/useEventHandler';
import api from '@api/index';

import getMultipleNames from '@utils/getMultipleNames';
import AlbumList from '@components/AlbumList';
import ArtistDropdown from '@components/Common/Dropdown/ArtistDropdown';

import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { useAuthState, useAuthDispatch } from '@context/AuthContext';

function ArtistDetail({ artistInfo: artist }) {
  const state = useAuthState();
  const dispatch = useAuthDispatch();
  const { artistList } = state;
  const [artistState, setArtistState] = useState(artistList);

  const deleteArtistEvent = () => {
    api.delete(`library/artists/${artist.id}`);
    dispatch({ type: 'DELETE_ARTIST', artistId: artist.id });
  };

  const addArtistEvent = () => {
    api.post(`library/artists`, { artistId: artist.id });
    dispatch({ type: 'ADD_ARTIST', artistId: artist.id });
  };

  useEffect(() => {
    setArtistState(artistList);
  }, [dispatch]);
  console.log(artistState);

  return (
    <Container>
      <Header>
        <HeaderImgWrapper>
          <CircleImage imageSrc={artist.imgUrl} alt="detail-header-img" />
        </HeaderImgWrapper>
        <HeaderContent>
          <TopContainer>
            <MainTitle>{artist.name}</MainTitle>
            <SubTitle>
              {artist.debut.replace(/-/g, '.').slice(0, 10)} 데뷔 ·{' '}
              {getMultipleNames(artist.genres)}
            </SubTitle>
          </TopContainer>
          <BottomContainer>
            <ButtonWrapper>
              <ButtonContainer>
                {artistList?.includes(artist.id) ? (
                  <IoMdHeart
                    size={24}
                    color="ff1350"
                    onClick={useEventHandler(deleteArtistEvent, null)}
                  />
                ) : (
                  <IoMdHeartEmpty
                    size={24}
                    color="575757"
                    onClick={useEventHandler(addArtistEvent, null)}
                  />
                )}
              </ButtonContainer>
              <ButtonContainer>
                <HiOutlineDotsHorizontal size={24} color="575757" />
                <ArtistDropdown id={artist.id} />
              </ButtonContainer>
            </ButtonWrapper>
          </BottomContainer>
        </HeaderContent>
      </Header>
      <Wrapper>
        {artist.tracks.length > 0 && (
          <Section>
            <SectionTitle>노래</SectionTitle>
            <TrackList type trackList={artist.tracks} />
          </Section>
        )}
        {artist.albums.length > 0 && (
          <Section>
            <SectionTitle>앨범</SectionTitle>
            <AlbumList albumList={artist.albums} />
          </Section>
        )}
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
  max-width: 964px;
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

const TopContainer = styled.div``;

const BottomContainer = styled.div``;

const ButtonWrapper = styled.div`
  width: 74px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  position: relative;
`;

const ButtonContainer = styled.div`
  cursor: pointer;
`;

export default ArtistDetail;

import React from 'react';
import styled from 'styled-components';
import { HiHeart } from 'react-icons/hi';
import { BsMusicPlayer } from 'react-icons/bs';
import { RiPlayListLine } from 'react-icons/ri';

interface TrackItemProps {
  type: string;
  title: string;
  artists: string[];
  album: string;
  imgUrl: string;
}

function TrackItem({ type, title, artists, album, imgUrl }: TrackItemProps) {
  return (
    <Wrapper>
      <TrackWrapper style={{ width: '300px', justifyContent: 'flex-start', color: 'black' }}>
        <TrackImg src={imgUrl} alt="track-image" />
        <Text>{title}</Text>
      </TrackWrapper>
      <TrackWrapper>
        <Text>{artists.join(',')}</Text>
      </TrackWrapper>
      <TrackWrapper>
        <Text>{album}</Text>
      </TrackWrapper>
      <TrackWrapper style={{ width: '140px', color: 'grey' }}>
        <BsMusicPlayer size={20} />
        <RiPlayListLine size={20} />
        <HiHeart size={20} />
      </TrackWrapper>
    </Wrapper>
  );
}

const Text = styled.a`
  font-size: 0.8rem;
`;

const TrackImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 8px;
`;

const TrackWrapper = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 960px;
  height: 50px;
  padding: 18px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  color: ${props => props.theme.color.greyFontColor};
  &:hover {
    background: ${props => props.theme.color.lightgrey};
  }
`;

export default TrackItem;

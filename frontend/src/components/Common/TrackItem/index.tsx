import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { HiHeart } from 'react-icons/hi';
import { BsMusicPlayer } from 'react-icons/bs';
import { RiPlayListLine } from 'react-icons/ri';

import trimContentLength from '@utils/trimContentLength';

interface ITrackMetaProps {
  type: string;
  trackMetaData: TrackMeta;
}

type TrackMeta = {
  id: number;
  title: string;
  artists: any[];
  album: any;
  imgUrl: string;
};

function TrackItem({ type, trackMetaData: track }: ITrackMetaProps) {
  return (
    <Wrapper>
      <TrackWrapper style={firstWrapperStyle}>
        {type === 'checkbox' && <Checkbox type="checkbox" />}
        <TrackImgWrapper>
          <TrackHoverImg src="/images/track-hover-img.png" className="track-hover-img" />
          <TrackImg src={track.album.imgUrl} alt="track-image" />
        </TrackImgWrapper>
        <Text>{trimContentLength(track.title, 35)}</Text>
      </TrackWrapper>
      <TrackWrapper>
        {track.artists?.map(artist => (
          <>
            <Link href="/artist/[id]" as={`/artist/${artist.id}`}>
              <ArtistName>{artist.name}</ArtistName>
            </Link>
          </>
        ))}
      </TrackWrapper>
      <TrackWrapper>
        <AlbumTitle>{track.album.name}</AlbumTitle>
      </TrackWrapper>
      <TrackWrapper style={lastWrapperStyle}>
        <BsMusicPlayer size={20} />
        <RiPlayListLine size={20} />
        <HiHeart size={20} className="heart" />
      </TrackWrapper>
    </Wrapper>
  );
}

const firstWrapperStyle = {
  width: '350px',
  justifyContent: 'flex-start',
};

const lastWrapperStyle = {
  width: '150px',
  color: 'grey',
};

const Text = styled.a`
  ${props => props.theme.font.plain}
  white-space: nowrap;
`;

const ArtistName = styled(Text)`
  ${props => props.theme.font.sub}
`;

const AlbumTitle = styled(Text)`
  ${props => props.theme.font.sub}
  font-size: 14px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const TrackWrapper = styled.div`
  width: 210px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const TrackImgWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const TrackImg = styled.img`
  width: 100%;
`;

const TrackHoverImg = styled.img`
  width: 100%;
  display: none;
`;

const Wrapper = styled.button`
  width: 100%;
  height: 50px;

  box-sizing: content-box;
  padding: 0 12px;
  position: relative;
  right: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  .heart {
    color: ${props => props.theme.color.highlight};
  }
  &:hover {
    background: ${props => props.theme.color.lightgrey};
    .track-hover-img {
      display: block;
    }
  }
`;

export default TrackItem;

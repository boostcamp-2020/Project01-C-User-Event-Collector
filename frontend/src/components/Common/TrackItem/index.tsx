import React from 'react';
import styled from 'styled-components';

import { HiHeart } from 'react-icons/hi';
import { BsMusicPlayer } from 'react-icons/bs';
import { RiPlayListLine } from 'react-icons/ri';

import trimContentLength from '@utils/trimContentLength';
import A from '@components/Common/A';

interface ITrackMetaProps {
  chart?: number;
  type?: string;
  trackMetaData: TrackMeta;
  selected?: any;
  onSelectHandler?: any;
  albumData?: any;
}

type TrackMeta = {
  id: number;
  title: string;
  artists: any[];
  album?: any;
  imgUrl: string;
};

const TrackItem = ({
  chart,
  type,
  trackMetaData: track,
  selected,
  onSelectHandler,
  albumData,
}: ITrackMetaProps) => {
  const target = 'TrackItem';
  return (
    <Wrapper>
      <TrackWrapper style={firstWrapperStyle}>
        {type === 'checkbox' && (
          <Checkbox
            type="checkbox"
            value={track.id}
            checked={!!selected.includes(+track.id)}
            onChange={onSelectHandler}
          />
        )}
        {track.album ?
          (<TrackImgWrapper>
            <TrackHoverImg src="/images/track-hover-img.png" className="track-hover-img" />
            <TrackImg
              src={track.album?.imgUrl ? track.album.imgUrl : albumData.imgUrl}
              alt="track-image"
            />
          </TrackImgWrapper>) :
          (<CountWrapper>{chart}</CountWrapper>)}
        <A next="track" id={track.id} target={target}>
          <Text>{trimContentLength(track.title, 35)}</Text>
        </A>
      </TrackWrapper>
      <TrackWrapper>
        {track?.artists &&
          track?.artists?.map(artist => (
            <A next="artist" id={artist.id} key={artist.id} target={target}>
              <ArtistName>{artist.name}</ArtistName>
            </A>
          ))}
        {albumData?.artists &&
          albumData?.artists?.map(artist => (
            <A next="artist" id={artist.id} key={artist.id} target={target}>
              <ArtistName>{artist.name}</ArtistName>
            </A>
          ))}
      </TrackWrapper>
      <TrackWrapper>
        {track?.album && (
          <A next="album" id={track.album?.id} target={target}>
            <AlbumTitle>{track.album?.name}</AlbumTitle>
          </A>
        )}
        {albumData && (
          <A next="album" id={albumData?.id} target={target}>
            <AlbumTitle>{albumData?.name}</AlbumTitle>
          </A>
        )}
      </TrackWrapper>
      <TrackWrapper style={lastWrapperStyle}>
        <BsMusicPlayer size={20} />
        <RiPlayListLine size={20} />
        <HiHeart size={20} className="heart" />
      </TrackWrapper>
    </Wrapper>
  );
};

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
  text-align: left;
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

const CountWrapper = styled.div`
  width: 30px;

  padding-left: 4px;
  padding-right: 10px;

  font-size: 15px;
  text-align: center;
`;

export default TrackItem;

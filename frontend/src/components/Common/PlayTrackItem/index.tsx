import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoHeartOutline } from 'react-icons/io5';
import { RiPlayListLine } from 'react-icons/ri';
import { BsThreeDots } from 'react-icons/bs';
import api from '@api/index';
import A from '@components/Common/A';

function PlayTrackItem({ trackData : track }) {
  const target = 'PlayTrackItem';
  return (
    <TrackWrapper>
      <TrackImgWrapper>
        <A next="album" id={track?.album?.id} target={target}>
          <TrackImg src={track?.album?.imgUrl} alt="playbar-track-img" />
        </A>
      </TrackImgWrapper>
      <TrackContentWrapper>
        <A next="track" id={track?.id} target={target}>
          <TrackTitle>{track?.title}</TrackTitle>
        </A>
        <A next="artist" id={track?.artists[0]?.id} target={target}>
          <TrackArtist>{track?.artists[0]?.name}</TrackArtist>
        </A>
      </TrackContentWrapper>
      <IconWrapper>
        <IoHeartOutline className="like button" size={24} />
        <RiPlayListLine className="lyric button" size={20} />
        <BsThreeDots className="dropdown button" size={20} />
      </IconWrapper>
    </TrackWrapper>
  );
}

const TrackImgWrapper = styled.a``;

const TrackImg = styled.img`
  width: 45px;
  height: 45px;
`;

const TrackContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
`;

const TrackTitle = styled.a`
  font-weight: 600;
  font-size: 14px;
  color: ${props => props.theme.color.white};
`;

const TrackArtist = styled.a`
  font-size: 12px;
  margin-top: 8px;
  color: ${props => props.theme.color.playbarFontColor};
`;

const IconWrapper = styled.div`
  width: 115px;
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  .icon:hover {
    color: ${props => props.theme.color.white};
  }
`;

const TrackWrapper = styled.div`
  padding-left: 18px;
  min-width: 350px;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${props => props.theme.color.playbarFontColor};
`;

export default PlayTrackItem;

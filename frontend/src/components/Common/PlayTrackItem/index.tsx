import React from 'react';
import styled from 'styled-components';
import { IoHeartOutline } from 'react-icons/io5';
import { RiPlayListLine } from 'react-icons/ri';
import { BsThreeDots } from 'react-icons/bs';

const testImgUrl =
  'https://musicmeta-phinf.pstatic.net/album/005/064/5064543.jpg?type=r720Fll&v=20201104164506';

function PlayTrackItem() {
  return (
    <TrackWrapper>
      <TrackImgWrapper>
        <TrackImg src={testImgUrl} alt="playbar-track-img" />
      </TrackImgWrapper>
      <TrackContentWrapper>
        <TrackTitle>얘랑 있을 때 좋다 (...</TrackTitle>
        <TrackArtist>어쿠스틱 콜라보</TrackArtist>
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

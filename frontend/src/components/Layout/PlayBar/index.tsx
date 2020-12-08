import React from 'react';
import styled from 'styled-components';
import {
  IoPlaySkipForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySharp,
  IoShuffleOutline,
  IoRepeat,
  IoHeart,
  IoHeartOutline,
} from 'react-icons/io5';
import {
  BsFillVolumeUpFill,
  BsFillVolumeMuteFill,
  BsMusicNoteList,
  BsThreeDots,
} from 'react-icons/bs';
import { RiPlayListLine } from 'react-icons/ri';

// const eventHandler = () => {
//   axios
//     .post('http://localhost:8000/api/log', { eventType: 'clickPlaybar', userAge: 24 })
//     .then(res => {
//       console.log(res.data);
//     });
// };

const testImgUrl =
  'https://musicmeta-phinf.pstatic.net/album/005/064/5064543.jpg?type=r720Fll&v=20201104164506';

function PlayBar() {
  return (
    <Player>
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
      <ButtonWrapper>
        <IoShuffleOutline className="side button" size={26} />
        <IoPlaySkipBackSharp className="skip button" size={22} />
        <IoPlaySharp className="play button" size={35} />
        <IoPlaySkipForwardSharp className="skip button" size={22} />
        <IoRepeat className="side button" size={26} />
      </ButtonWrapper>
      <ListWrapper>
        <TrackPlayTime>00:24 / 03:21</TrackPlayTime>
        <VolumeBar>
          <BsFillVolumeUpFill size={20} />
          <VolumeStatusBar />
        </VolumeBar>
        <ListUpButton>
          <BsMusicNoteList size={28} />
        </ListUpButton>
      </ListWrapper>
    </Player>
  );
}

const TrackPlayTime = styled.p`
  font-size: 12px;
`;
const VolumeBar = styled.div`
  display: flex;
  align-items: center;
`;

const VolumeStatusBar = styled.div`
  width: 100px;
  height: 3px;
  margin-left: 4px;
  background: ${props => props.theme.color.grey};
`;
const ListUpButton = styled.button`
  height: 100%;
  width: ${props => props.theme.size.playbarheight};
  border-left: 1px solid ${props => props.theme.color.grey};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.color.playbarFontColor};
`;

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

const ButtonWrapper = styled.div`
  min-width: 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .skip {
    color: ${props => props.theme.color.white};
  }
  .side {
    color: ${props => props.theme.color.grey};
  }
  .play {
    color: ${props => props.theme.color.highlight};
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

const ListWrapper = styled(TrackWrapper)`
  justify-content: space-between;
`;

const Player = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;

  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10400;
  height: ${props => props.theme.size.playbarheight};
  background-color: rgba(25, 25, 25, 0.97);
  .button {
    cursor: pointer;
  }
`;

export default PlayBar;

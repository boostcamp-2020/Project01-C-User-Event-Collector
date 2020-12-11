import React from 'react';
import styled from 'styled-components';
import {
  IoPlaySkipForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySharp,
  IoShuffleOutline,
  IoRepeat,
} from 'react-icons/io5';
import { BsFillVolumeUpFill, BsMusicNoteList } from 'react-icons/bs';
import PlayTrackItem from '@components/Common/PlayTrackItem';

function PlayBar() {
  return (
    <Player>
      <PlayTrackItem />
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

const ListWrapper = styled.div`
  padding-left: 18px;
  min-width: 350px;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${props => props.theme.color.playbarFontColor};
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

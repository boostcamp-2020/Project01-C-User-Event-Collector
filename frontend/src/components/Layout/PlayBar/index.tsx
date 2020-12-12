import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import {
  IoPlaySkipForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySharp,
  IoShuffleOutline,
  IoRepeat,
  IoPause,
  IoCloseOutline,
} from 'react-icons/io5';
import { BsFillVolumeUpFill, BsMusicNoteList } from 'react-icons/bs';

import PlayTrackItem from '@components/Common/PlayTrackItem';
import { usePlayState, usePlayDispatch } from '@context/play';

function PlayBar() {
  const state = usePlayState();
  const dispatch = usePlayDispatch();

  // const [userAuth, setUserAuth] = useState(false);
  const [adShow, setAdShow] = useState(false);

  const setPlayStart = () => {
    setAdShow(true);
    return dispatch({ type: "PLAY_START" });
  }
  const setPlayPause = () => dispatch({ type: "PLAY_PAUSE" });

  const adCloseHandle = () => {
    console.log('hey');
    setAdShow(false);
  }


  return (
    <Fragment>
      {adShow && (
        <Advertisement>
          <AdContent>
            <TextContent>1분 미리듣기 중입니다. <br /> 로그인 후 6개월간 100% 페이백 혜택을 받아보세요.</TextContent>
            <LoginLink>로그인</LoginLink>
          </AdContent>
          <CloseButton>
            <IoCloseOutline size={26} onClick={adCloseHandle} color={'fff'}/>
          </CloseButton>
        </Advertisement>
      )}
      <Player>
        <PlayTrackItem />
        <ButtonWrapper>
          <IoShuffleOutline className="side button" size={26} />
          <IoPlaySkipBackSharp className="skip button" size={22} />
          {state.isPlaying ?
            (<IoPause className="play button" size={35} onClick={setPlayPause} />) :
            (<IoPlaySharp className="play button" size={35} onClick={setPlayStart} />)
          }
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
    </Fragment>
  );
}

const Advertisement = styled.div`
  position: relative;
  z-index: 10300;

  position: fixed;
  right: 0;
  bottom: 81px;
  left: 0;
  padding: 14px 20px 15px;
  text-align: center;
  background-color: rgba(35,35,35,.97);
  outline: 0;
`;

const AdContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  font-size: 15px;
  margin-right: 28px;
`;

const TextContent = styled.em`
  text-align: left;
  line-height: 1.3rem;
  color: white;
`;

const LoginLink = styled.a`
  line-height: 1.3rem;
  color: #ff1350;
  padding-left: 0.5rem;

  ::after{
    content: '>';
    padding: 2px;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 54px;
  height: 42px;
  text-align: center;
  padding: 0.8rem;
  cursor: pointer;
`;

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

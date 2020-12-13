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
import { useAuthState, useAuthDispatch } from '@context/AuthContext';

function PlayBar() {
  const state = usePlayState();
  const dispatch = usePlayDispatch();

  const authState = useAuthState();
  const authDispatch = useAuthDispatch();
  const { userInfo } = authState;

  const [adShow, setAdShow] = useState(false);
  const [listShow, setListShow] = useState(false);

  const setPlayStart = () => {
    setAdShow(true);
    return dispatch({ type: 'PLAY_START' });
  };
  const setPlayPause = () => dispatch({ type: 'PLAY_PAUSE' });

  const adCloseHandle = () => {
    setAdShow(false);
  };
  const listUpHandle = () => {
    setListShow(!listShow);
  };

  return (
    <>
      {adShow && (
        <AdvertisementWrapper>
          <Advertisement>
            <AdContent>
              <TextContent>
                1분 미리듣기 중입니다.
                <br />
                {userInfo?.isLoggedIn
                  ? '다양한 할인 혜택으로 VIBE를 시작해보세요.'
                  : '로그인 후 6개월간 100% 페이백 혜택을 받아보세요.'}
              </TextContent>
              {userInfo?.isLoggedIn ? (
                <LoginLink>시작하기</LoginLink>
              ) : (
                <LoginLink>로그인</LoginLink>
              )}
            </AdContent>
            <CloseButton>
              <IoCloseOutline size={26} onClick={adCloseHandle} color="fff" />
            </CloseButton>
          </Advertisement>
        </AdvertisementWrapper>
      )}
      <>
        <Player>
          <PlayTrackItem />
          <ButtonWrapper>
            <IoShuffleOutline className="side button" size={26} />
            <IoPlaySkipBackSharp className="skip button" size={22} />
            {state.isPlaying ? (
              <IoPause className="play button" size={35} onClick={setPlayPause} />
            ) : (
              <IoPlaySharp className="play button" size={35} onClick={setPlayStart} />
            )}
            <IoPlaySkipForwardSharp className="skip button" size={22} />
            <IoRepeat className="side button" size={26} />
          </ButtonWrapper>
          <ListWrapper>
            <TrackPlayTime>00:24 / 03:21</TrackPlayTime>
            <VolumeBar>
              <BsFillVolumeUpFill size={20} />
              <VolumeStatusBar />
            </VolumeBar>
            <ListUpButton up={listShow} onClick={listUpHandle}>
              <BsMusicNoteList size={28} color={listShow ? 'fff' : ''} />
            </ListUpButton>
          </ListWrapper>
        </Player>
        <MyPlaylistContainer visiable={listShow}>
          <Dimmed />
          <AlbumImage />
          <Playlist />
        </MyPlaylistContainer>
      </>
    </>
  );
}

const MyPlaylistContainer = styled.div<{ visiable: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 81px;
  left: 0;
  z-index: 10200;
  visibility: ${props => (props.visiable ? 'visiable' : 'hidden')};
`;

const Dimmed = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(20, 20, 20, 0.97);
`;

const AlbumImage = styled.div`
  position: absolute;
  top: 0;
  right: 350px;
  bottom: 0;
  left: 0;
  text-align: center;
`;

const Playlist = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 350px;
  background-color: #141414;
`;

const AdvertisementWrapper = styled.div`
  position: relative;
  z-index: 10300;
`;

const Advertisement = styled.div`
  position: fixed;
  right: 0;
  bottom: 81px;
  left: 0;
  padding: 14px 20px 15px;
  text-align: center;
  background-color: rgba(35, 35, 35, 0.97);
  outline: 0;
`;

const AdContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

  font-size: 15px;
  margin-right: 28px;
`;

const TextContent = styled.em`
  text-align: center;
  line-height: 1.3rem;
  color: white;
`;

const LoginLink = styled.a`
  line-height: 1.3rem;
  color: #ff1350;
  padding-left: 0.5rem;

  ::after {
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
const ListUpButton = styled.button<{ up: boolean }>`
  height: 100%;
  width: ${props => props.theme.size.playbarheight};
  border-left: 1px solid ${props => props.theme.color.grey};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.color.playbarFontColor};
  background: ${props => (props.up ? '#ff1350' : '')};
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

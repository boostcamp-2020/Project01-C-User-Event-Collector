import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import useFetch from '@hooks/useFetch';
import api from '@api/index';
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
import useEventHandler from '@hooks/useEventHandler';
import ClickEventWrapper from '@components/EventWrapper/ClickEventWrapper';

import PlayTrackItem from '@components/Common/PlayTrackItem';
import { usePlayState, usePlayDispatch } from '@context/PlayContext';
import { useAuthState } from '@context/AuthContext';

function PlayBar() {
  const router = useRouter();
  const [isShuffled, setIsShuffled] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [playlistState, setPlaylistState] = useState(null);

  const { data: log } = useFetch(`/log`, null);

  const state = usePlayState();
  const dispatch = usePlayDispatch();
  const authState = useAuthState();

  const fetchData = () => {
    api.get('/track').then(res => {
      const trackList = res.data.data.slice(0, 12);
      setPlaylistState(trackList);
      dispatch({ type: 'ADD_TRACK_LAST', track: trackList });
    });
  };

  const musicLogData = action => {
    return {
      eventName: 'music_event',
      parameters: { action, page: router.asPath },
    };
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  const { playList, playIndex } = state;
  const { userInfo } = authState;

  const [adShow, setAdShow] = useState(false);
  const [listShow, setListShow] = useState(false);
  const [logShow, setLogShow] = useState(false);

  const setPlayStart = () => {
    setAdShow(true);
    return dispatch({ type: 'PLAY_START' });
  };

  console.log(playlistState);

  const setPlayNext = () => {
    dispatch({ type: 'PLAY_NEXT' });
    dispatch({ type: 'PLAY_PAUSE' });
  };
  const setPlayPrev = () => {
    dispatch({ type: 'PLAY_PREV' });
    dispatch({ type: 'PLAY_PAUSE' });
  };

  const setRepeatOff = () => setIsRepeat(false);
  const setRepeatOn = () => setIsRepeat(true);
  const setShuffleOff = () => setIsShuffled(false);
  const setShuffleOn = () => setIsShuffled(true);
  const setPlayPause = () => dispatch({ type: 'PLAY_PAUSE' });

  const adCloseHandle = () => {
    setAdShow(false);
  };
  const listUpHandle = () => {
    setListShow(!listShow);
  };
  const logUpHandle = () => {
    setLogShow(!logShow);
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
                {userInfo?.isLoggedIn ? (
                  <ClickEventWrapper target="PlayBar/MembershipBtn">
                    <LoginLink>시작하기</LoginLink>
                  </ClickEventWrapper>
                ) : (
                  <ClickEventWrapper target="PlayBar/LoginBtn">
                    <LoginLink>로그인</LoginLink>
                  </ClickEventWrapper>
                )}
              </TextContent>
            </AdContent>
            <ClickEventWrapper target="PlayBar/MembershipCloseBtn">
              <CloseButton>
                <IoCloseOutline size={26} onClick={adCloseHandle} color="fff" />
              </CloseButton>
            </ClickEventWrapper>
          </Advertisement>
        </AdvertisementWrapper>
      )}
      <>
        <Player>
          <PlayTrackItem type={null} trackData={playList[playIndex]} />
          <ButtonWrapper>
            {isShuffled ? (
              <IoShuffleOutline
                className="side button"
                size={26}
                style={{ color: 'white' }}
                onClick={useEventHandler(setShuffleOff, musicLogData('shuffle_off'))}
              />
            ) : (
              <IoShuffleOutline
                className="side button"
                size={26}
                onClick={useEventHandler(setShuffleOn, musicLogData('shuffle_on'))}
              />
            )}
            <IoPlaySkipBackSharp
              className="skip button"
              size={22}
              onClick={useEventHandler(setPlayPrev, musicLogData('prev'))}
            />
            {state.isPlaying ? (
              <IoPause
                className="play button"
                size={35}
                onClick={useEventHandler(setPlayPause, musicLogData('pause'))}
              />
            ) : (
              <IoPlaySharp
                className="play button"
                size={35}
                onClick={useEventHandler(setPlayStart, musicLogData('play'))}
              />
            )}
            <IoPlaySkipForwardSharp
              className="skip button"
              size={22}
              onClick={useEventHandler(setPlayNext, musicLogData('next'))}
            />
            {isRepeat ? (
              <IoRepeat
                className="side button"
                size={26}
                style={{ color: 'white' }}
                onClick={useEventHandler(setRepeatOff, musicLogData('repeat_off'))}
              />
            ) : (
              <IoRepeat
                className="side button"
                size={26}
                onClick={useEventHandler(setRepeatOn, musicLogData('repeat_on'))}
              />
            )}
          </ButtonWrapper>
          <ListWrapper>
            <TrackPlayTime>00:24 / 03:21</TrackPlayTime>
            <VolumeBar>
              <BsFillVolumeUpFill size={20} />
              <VolumeStatusBar />
            </VolumeBar>
            <LogUpButton up={logShow} onClick={logUpHandle}>
              <LogUp>SHOW EVENT LOGS</LogUp>
            </LogUpButton>
            <ListUpButton up={listShow} onClick={listUpHandle}>
              <BsMusicNoteList size={28} color={listShow ? 'fff' : ''} />
            </ListUpButton>
          </ListWrapper>
        </Player>
        <MyLogListContainer visiable={logShow}>
          <LogDimmed>
            <LogWrapper>
              {log?.data &&
                log?.data?.map(log => (
                  <Log>
                    <Info style={{ color: '#64ead8' }}>
                      eventTime : 
{' '}
{JSON.stringify(log.eventTime)}
                    </Info>
                    <Info style={{ color: '#ffe500' }}>
                      eventName : 
{' '}
{JSON.stringify(log.eventName)}
                    </Info>
                    <Info>
                      parameters :
{JSON.stringify(log.parameters)}
                    </Info>
                    <Info>
                      userInfo :
{JSON.stringify(log.userInfo)}
                    </Info>
                    <Info>
                      userAgent :
{JSON.stringify(log.userAgent)}
                    </Info>
                    <hr style={{ borderColor: 'darkgrey' }} />
                  </Log>
                ))}
            </LogWrapper>
          </LogDimmed>
        </MyLogListContainer>
        <MyPlaylistContainer visiable={listShow}>
          <Dimmed>
            <AlbumImage src={playList[playIndex]?.album?.imgUrl} />
          </Dimmed>
          <Playlist>
            <PlayItemWrapper>
              {playList?.map(track => (
                <PlayTrackItem type="playbar" key={track.id} trackData={track} />
              ))}
            </PlayItemWrapper>
          </Playlist>
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

const MyLogListContainer = styled(MyPlaylistContainer)`
  z-index: 12000;
`;

const Dimmed = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(20, 20, 20, 0.97);
`;

const LogWrapper = styled.div`
  height: 600px;
  overflow: scroll;
`;

const LogDimmed = styled(Dimmed)`
  padding: 40px 120px;
`;

const AlbumImage = styled.img`
  position: absolute;
  right: 350px;
  bottom: 0;
  left: 0;
  width: 500px;
  height: 500px;
  text-align: center;
  margin: auto;
`;

const Playlist = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  width: 350px;
  background-color: #141414;
`;
const PlayItemWrapper = styled.div`
  height: 65px;
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
  justify-content: center;
  align-items: flex-end;
  text-align: center;

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
const LogUpButton = styled.button<{ up: boolean }>``;

const LogUp = styled.span`
  color: ${props => props.theme.color.highlight};
  height: 100%;
  position: absolute;
  top: 20px;
  left: 320px;
  font-size: 12px;
`;

const Log = styled.div`
  color: white;
  font-size: 11px;
  padding-bottom: 10px;
`;

const Info = styled.p`
  padding-bottom: 3px;
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

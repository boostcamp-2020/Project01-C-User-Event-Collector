import React from 'react';
import { useRouter } from 'next/router';
import styled from '@styles/themed-components';
import { Dropdown } from 'semantic-ui-react';
import api from '@api/index';
import logEventHandler from '@utils/logEventHandler';
import { usePlayState, usePlayDispatch } from '@context/play';
import { useAuthState, useAuthDispatch } from '@context/AuthContext';
import * as T from '../../../constants/dropdownText';

interface IDropdownProps {
  type: string;
  albumData?: any;
  magData?: any;
  artistData?: any;
  playlistData?: any;
  trackData?: any;
}

const DropdownComponent = ({
  type,
  albumData,
  artistData,
  magData,
  playlistData,
  trackData,
}: IDropdownProps) => {
  // 개발 중, 타입에러를 막기 위해 주석처리 했습니다
  const router = useRouter();
  const state = usePlayState();
  const dispatch = usePlayDispatch();
  const userState = useAuthState();
  const userDispatch = useAuthDispatch();

  console.log('playstate :: ', state);
  console.log('userState :: ', userState);

  let dataType = 'undefined';
  let data = { id: null };
  if (albumData) {
    data = albumData;
    dataType = 'album';
  } else if (playlistData) {
    data = playlistData;
    dataType = 'playlist';
  } else if (artistData) {
    data = artistData;
    dataType = 'artist';
  } else if (trackData) {
    data = trackData;
    dataType = 'track';
  }

  const clickEventLog = {
    eventTime: new Date(),
    eventName: 'ClickEvent',
    parameters: { page: router.asPath, target: `${dataType}Modal/${data.id}` },
  };

  const customLogData = (name, params) => {
    return {
      eventTime: new Date(),
      eventName: name,
      parameters: params,
    };
  };

  const postLog = () => {
    api.post('/log', customLogData('SaveEvent', { type: dataType, id: data.id }));
    console.log('88888');
  };

  const addAlbumEvent = id => {
    api.post('/library/albums', { albumId: id }).then(res => {
      postLog();
    });
  };

  const addPlaylistEvent = id => {
    api.post('/library/playlists', { playlistId: id }).then(res => {
      postLog();
    });
  };

  // const addTrackEvent = id => {
  //   api.post('/library/tracks', { trackId: id });
  //   api.post('/log', customLogData('SaveEvent', { type: dataType, id: data.id }));
  // };

  // const addArtistEvent = id => {
  //   api.post('/library/artists', { artistId: id });
  //   api.post('/log', customLogData('SaveEvent', { type: dataType, id: data.id }));
  // };

  // const addErrorEvent = msg => {
  //   console.log(msg);
  // };

  // 이벤트 전부 써보기
  // const addEventHandler = () => {
  //   switch (dataType) {
  //     case 'album':
  //       logEventHandler(addAlbumEvent(data.id), clickEventLog(`${dataType}Dropdown/${data.id}`));
  //       break;
  //     case 'playlist':
  //       logEventHandler(addPlaylistEvent(data.id), clickEventLog(`${dataType}Dropdown/${data.id}`));
  //       break;
  //     case 'track':
  //       logEventHandler(addTrackEvent(data.id), clickEventLog(`${dataType}Dropdown/${data.id}`));
  //       break;
  //     case 'artist':
  //       logEventHandler(addArtistEvent(data.id), clickEventLog(`${dataType}Dropdown/${data.id}`));
  //       break;
  //     default:
  //       addErrorEvent('empty Data');
  //   }
  // };

  const logoutEvent = () => {
    console.log('------logoutEvent-------');
    localStorage.clear();
    document.cookie = 'token=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
    alert('로그아웃 되었습니다.');
    window.location.reload();
  };

  switch (type) {
    case 'auth':
      return (
        <Wrapper style={authWrapperStyle}>
          <Dropdown
            style={{
              authDropdownStyle,
            }}
          >
            <Dropdown.Menu direction="left" style={dropdownMenuStyle}>
              <Dropdown.Item
                style={dropdownItemStyle}
                className={T.MY_MEMBERSHIP}
                text={T.MY_MEMBERSHIP}
                onClick={logEventHandler}
              />
              <Dropdown.Item style={dropdownItemStyle} text={T.NOTICE} onClick={logEventHandler} />
              <Dropdown.Item
                style={dropdownItemStyle}
                text={T.ACCOUNT_SETTING}
                onClick={logEventHandler}
              />
              <Dropdown.Item
                style={dropdownItemStyle}
                text={T.LOGOUT}
                onClick={logEventHandler(logoutEvent, null)}
              />
            </Dropdown.Menu>
          </Dropdown>
        </Wrapper>
      );
    case 'listItem':
      return (
        <Wrapper>
          <Dropdown style={dropdownStyle}>
            <Dropdown.Menu direction="right" style={dropdownMenuStyle}>
              <Dropdown.Item
                style={dropdownItemStyle}
                text={T.ADD_TO_LIBRARY}
                onClick={() => logEventHandler(addPlaylistEvent(data.id), clickEventLog)}
              />
              <Dropdown.Item
                style={dropdownItemStyle}
                text={T.ADD_TO_NEXT}
                onClick={logEventHandler}
              />
              <Dropdown.Item
                style={dropdownItemStyle}
                text={T.ADD_TO_PREV}
                onClick={logEventHandler}
              />
              <Dropdown.Item style={dropdownItemStyle} text={T.BUY_MP3} onClick={logEventHandler} />
              <Dropdown.Item style={dropdownItemStyle} text={T.SHARE} onClick={logEventHandler} />
            </Dropdown.Menu>
          </Dropdown>
        </Wrapper>
      );
    case 'artist':
      return (
        <Wrapper>
          <Dropdown style={dropdownStyle}>
            <Dropdown.Menu direction="right">
              <Dropdown.Item style={dropdownItemStyle} text={T.LIKE} onClick={logEventHandler} />
              <Dropdown.Item style={dropdownItemStyle} text={T.BUY_MP3} onClick={logEventHandler} />
            </Dropdown.Menu>
          </Dropdown>
        </Wrapper>
      );
    default:
      return (
        <Wrapper>
          <Dropdown style={dropdownStyle}>
            <Dropdown.Menu direction="left">
              <Dropdown.Item style={dropdownItemStyle} text=" " />
            </Dropdown.Menu>
          </Dropdown>
        </Wrapper>
      );
  }
};

const authWrapperStyle = {
  width: '180px',
  height: '50px',
  textAlign: 'right',
  position: 'absolute',
};

const authDropdownStyle = {
  width: '100%',
  height: '100%',
  textAlign: 'right',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
};

const dropdownStyle = {
  position: 'absolute',
  bottom: '5px',
  right: '0px',
  width: '45px',
  height: '35px',
  border: '1px solid red',
  color: 'transparent',
};

const dropdownMenuStyle = {
  padding: '6px 0',
};

const dropdownItemStyle = {
  fontSize: '14px',
  lineHeight: '60%',
};

const Wrapper = styled.div<{ style?: any }>`
  position: relative;
`;

export default DropdownComponent;

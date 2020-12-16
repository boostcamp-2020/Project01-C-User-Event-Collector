import React from 'react';
import { useRouter } from 'next/router';
import styled from '@styles/themed-components';
import { Dropdown } from 'semantic-ui-react';
import api from '@api/index';
import useEventHandler from '@hooks/useEventHandler';
import { usePlayState, usePlayDispatch } from '@context/PlayContext';
import { useAuthDispatch, useAuthState } from '@context/AuthContext';
import * as T from '../../../constants/dropdownText';

interface IBoxDropdownProps {
  type: string;
  id: number;
  data?: any;
  trackData?: any;
}
interface ILogData {
  eventTime: Date;
  eventName: string;
  parameters: any;
}

const BoxDropdown = ({ trackData, type, id, data }: IBoxDropdownProps) => {
  const state = usePlayState();
  const dispatch = usePlayDispatch();
  const router = useRouter();
  const authState = useAuthState();
  const authDispatch = useAuthDispatch();
  console.log(state);
  console.log('trackData', trackData);

  const postLog = logData => {
    api.post('/log', logData);
  };

  const libraryLogData: ILogData = {
    eventTime: new Date(),
    eventName: 'library_event',
    parameters: { action: 'add', type, id },
  };

  const clickLogData = target => {
    return {
      eventTime: new Date(),
      eventName: 'click_event',
      parameters: { page: router.asPath, target },
    };
  };

  const addNextEvent = () => {
    if (type === 'track') dispatch({ type: 'ADD_TRACK', track: trackData.id });
    else trackData?.forEach(track => dispatch({ type: 'ADD_TRACK', track: track.id }));
    console.log('---------', state);
  };

  const addEvent = () => {
    console.log('addEvent start');
    switch (type) {
      case 'playlist':
        api.post('/library/playlists', { playlistId: id }).then(() => postLog(libraryLogData));
        break;
      case 'track':
        api.post('/library/tracks', { trackId: id }).then(() => postLog(libraryLogData));
        break;
      case 'album':
        api.post('/library/albums', { albumId: id }).then(() => postLog(libraryLogData));
        break;
      default:
        console.log('nothing happend');
    }
  };

  return (
    <Wrapper>
      <Dropdown style={dropdownStyle}>
        <Dropdown.Menu direction="right" style={dropdownMenuStyle}>
          {type !== 'magazines' && (
            <Dropdown.Item
              style={dropdownItemStyle}
              text={T.ADD_TO_LIBRARY}
              onClick={useEventHandler(addEvent, clickLogData(`Dropdown/${type}/${id}`))}
            />
          )}
          <Dropdown.Item
            style={dropdownItemStyle}
            text={T.ADD_TO_NEXT}
            onClick={useEventHandler(addNextEvent, clickLogData(`addNextBtn/${type}/${id}`))}
          />
          <Dropdown.Item style={dropdownItemStyle} text={T.ADD_TO_PREV} />
          <Dropdown.Item
            style={dropdownItemStyle}
            text={T.BUY_MP3}
            onClick={useEventHandler(null, clickLogData(`BuyBtn/${type}/${id}`))}
          />
          <Dropdown.Item
            style={dropdownItemStyle}
            text={T.SHARE}
            onClick={useEventHandler(null, clickLogData(`ShareBtn/${type}/${id}`))}
          />
        </Dropdown.Menu>
      </Dropdown>
    </Wrapper>
  );
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

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export default BoxDropdown;

import React from 'react';
import { useRouter } from 'next/router';
import styled from '@styles/themed-components';
import { Dropdown } from 'semantic-ui-react';
import api from '@api/index';
import useEventHandler from '@hooks/useEventHandler';
import { usePlayDispatch } from '@context/PlayContext';
import ClickEventWrapper from '@components/EventWrapper/ClickEventWrapper';
// import { useAuthDispatch, useAuthState } from '@context/AuthContext';
import * as T from '../../../constants/dropdownText';

interface IBoxDropdownProps {
  type: string;
  id: number;
  trackData?: any;
}

const BoxDropdown = ({ trackData, type, id }: IBoxDropdownProps) => {
  const dispatch = usePlayDispatch();
  const router = useRouter();
  // const authState = useAuthState();
  // const authDispatch = useAuthDispatch();

  const libraryLogData = action => {
    return {
      eventName: 'library_event',
      parameters: { action, type, id },
    };
  };

  const clickLogData = target => {
    return {
      eventTime: new Date(),
      eventName: 'click_event',
      parameters: { page: router.asPath, target },
    };
  };

  const addTrackNextEvent = () => {
    if (type === 'track') dispatch({ type: 'ADD_TRACK_NEXT', track: [trackData] });
    else dispatch({ type: 'ADD_TRACK_NEXT', track: trackData });
  };

  const addTrackLastEvent = () => {
    if (type === 'track') dispatch({ type: 'ADD_TRACK_LAST', track: [trackData] });
    else dispatch({ type: 'ADD_TRACK_LAST', track: trackData });
  };

  const addEvent = () => {
    switch (type) {
      case 'playlist':
        api.post('/library/playlists', { playlistId: id });
        break;
      case 'track':
        api.post('/library/tracks', { trackId: id });
        break;
      case 'album':
        api.post('/library/albums', { albumId: id });
        break;
      default:
        console.log('nothing happend');
    }
  };

  // const addPlaylistEvent = () => api.post('/library/playlists', { playlistId: id });
  // const addTrackEvent = () => api.post('/library/tracks', { trackId: id });
  // const addAlbumEvent = () => api.post('/library/albums', { albumId: id });

  return (
    <Wrapper>
      <Dropdown style={dropdownStyle}>
        <Dropdown.Menu direction="right" style={dropdownMenuStyle}>
          {type !== 'magazines' && (
            <ClickEventWrapper target={`Dropdown/AddBtn/${type}`} id={id}>
              <Dropdown.Item
                style={dropdownItemStyle}
                text={T.ADD_TO_LIBRARY}
                onClick={useEventHandler(addEvent, libraryLogData('like'))}
              />
            </ClickEventWrapper>
          )}
          <ClickEventWrapper target={`Dropdown/AddNextBtn/${type}`} id={id}>
            <Dropdown.Item
              style={dropdownItemStyle}
              text={T.ADD_TO_NEXT}
              onClick={useEventHandler(addTrackNextEvent, libraryLogData('add_next'))}
            />
          </ClickEventWrapper>
          <ClickEventWrapper target={`Dropdown/AddPrevBtn/${type}`} id={id}>
            <Dropdown.Item
              style={dropdownItemStyle}
              text={T.ADD_TO_PREV}
              onClick={useEventHandler(addTrackLastEvent, libraryLogData('add_prev'))}
            />
          </ClickEventWrapper>
          <ClickEventWrapper target={`Dropdown/BuyBtn/${type}`} id={id}>
            <Dropdown.Item
              style={dropdownItemStyle}
              text={T.BUY_MP3}
              onClick={useEventHandler(null, clickLogData(`BuyBtn/${type}/${id}`))}
            />
          </ClickEventWrapper>
          <ClickEventWrapper target={`Dropdown/ShareBtn/${type}`} id={id}>
            <Dropdown.Item
              style={dropdownItemStyle}
              text={T.SHARE}
              onClick={useEventHandler(null, clickLogData(`ShareBtn/${type}/${id}`))}
            />
          </ClickEventWrapper>
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
  color: 'transparent',
};

const dropdownMenuStyle = {
  padding: '10px 0',
};

const dropdownItemStyle = {
  fontSize: '14px',
  color: '#2f2f2f',
  width: '145px',
  height: '30px',
  padding: '5px 20px',
  display: 'flex',
  alignItems: 'center',
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  .item: hover {
    background: #f2f2f2;
  }
`;

export default BoxDropdown;

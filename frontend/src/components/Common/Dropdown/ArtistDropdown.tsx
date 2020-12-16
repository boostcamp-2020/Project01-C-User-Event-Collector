import React from 'react';
import { useRouter } from 'next/router';
import styled from '@styles/themed-components';
import { Dropdown } from 'semantic-ui-react';
import api from '@api/index';
import useEventHandler from '@hooks/useEventHandler';
import * as T from '../../../constants/dropdownText';

interface ILogData {
  eventTime: Date;
  eventName: string;
  parameters: any;
}

const ArtistDropdown = id => {
  const router = useRouter();

  const postLog = logData => {
    api.post('/log', logData);
  };

  const libraryLogData: ILogData = {
    eventTime: new Date(),
    eventName: 'library_event',
    parameters: { action: 'add', type: 'artist', id },
  };

  const clickLogData = target => {
    return {
      eventTime: new Date(),
      eventName: 'click_event',
      parameters: { page: router.asPath, target },
    };
  };

  const addLibraryEvent = () => {
    api.post('/library/artists', { artistId: id }).then(() => postLog(libraryLogData));
  };

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
            text={T.LIKE}
            onClick={useEventHandler(addLibraryEvent, libraryLogData)}
          />
          <Dropdown.Item
            style={dropdownItemStyle}
            text={T.SHARE}
            onClick={useEventHandler(null, clickLogData(`ShareBtn/artist/${id}`))}
          />
        </Dropdown.Menu>
      </Dropdown>
    </Wrapper>
  );
};

const authWrapperStyle = {
  width: '180px',
  height: '50px',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'flex-end',
  paddingTop: '15px',
};

const authDropdownStyle = {
  width: '100%',
  height: '100%',
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

export default ArtistDropdown;

import React from 'react';
import styled from '@styles/themed-components';
import { Dropdown } from 'semantic-ui-react';
import api from '@api/index';
import useEventHandler from '@hooks/useEventHandler';
import ClickEventWrapper from '@components/EventWrapper/ClickEventWrapper';
import * as T from '../../../constants/dropdownText';

interface ILogData {
  eventTime: Date;
  eventName: string;
  parameters: any;
}

const ArtistDropdown = id => {
  const postLog = logData => {
    api.post('/log', logData);
  };

  const libraryLogData: ILogData = {
    eventTime: new Date(),
    eventName: 'library_event',
    parameters: { action: 'add', type: 'artist', id },
  };

  const addLibraryEvent = () => {
    api.post('/library/artists', { artistId: id }).then(() => postLog(libraryLogData));
  };

  return (
    <Wrapper>
      <Dropdown
        style={{
          authDropdownStyle,
        }}
      >
        <Dropdown.Menu direction="left" style={dropdownMenuStyle}>
          <ClickEventWrapper target="LikeBtn/artist" id={id}>
            <Dropdown.Item
              style={dropdownItemStyle}
              text={T.LIKE}
              onClick={useEventHandler(addLibraryEvent, libraryLogData)}
            />
          </ClickEventWrapper>
          <ClickEventWrapper target="ShareBtn/artist" id={id}>
            <Dropdown.Item style={dropdownItemStyle} text={T.SHARE} />
          </ClickEventWrapper>
        </Dropdown.Menu>
      </Dropdown>
    </Wrapper>
  );
};

const authDropdownStyle = {
  width: '100%',
  height: '100%',
};

const dropdownMenuStyle = {
  padding: '8px 0',
};

const dropdownItemStyle = {
  fontSize: '14px',
  color: '#2f2f2f',
  width: '70px',
  height: '30px',
  padding: '15px',
  display: 'flex',
  alignItems: 'center',
};

const Wrapper = styled.div<{ style?: any }>`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 0;
  color: transparent;
  .item: hover {
    background: #f2f2f2;
  }
`;

export default ArtistDropdown;

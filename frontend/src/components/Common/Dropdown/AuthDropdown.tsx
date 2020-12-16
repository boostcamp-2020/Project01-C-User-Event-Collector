import React from 'react';
import { useRouter } from 'next/router';
import styled from '@styles/themed-components';
import { Dropdown } from 'semantic-ui-react';
import api from '@api/index';
import useEventHandler from '@hooks/useEventHandler';

import * as T from '../../../constants/dropdownText';

const postLog = logData => {
  api.post('/log', logData);
};

const AuthDropdown = () => {
  const router = useRouter();

  const logoutEvent = async () => {
    localStorage.clear();
    document.cookie = 'token=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
    postLog({
      eventTime: new Date(),
      eventName: 'logout_event',
      parameters: { page: router.asPath },
    });
    alert('로그아웃 되었습니다.');

    window.location.reload();
  };

  const clickLogData = target => {
    return {
      eventTime: new Date(),
      eventName: 'click_event',
      parameters: { page: router.asPath, target },
    };
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
            text={T.MY_MEMBERSHIP}
            onClick={useEventHandler(null, clickLogData(`Dropdown/Membership`))}
          />
          <Dropdown.Item
            style={dropdownItemStyle}
            text={T.NOTICE}
            onClick={useEventHandler(null, clickLogData(`Dropdown/Notice`))}
          />
          <Dropdown.Item
            style={dropdownItemStyle}
            text={T.ACCOUNT_SETTING}
            onClick={useEventHandler(null, clickLogData(`Dropdown/Setting`))}
          />
          <Dropdown.Item
            style={dropdownItemStyle}
            text={T.LOGOUT}
            onClick={useEventHandler(logoutEvent, clickLogData(`Dropdown/Logout`))}
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

export default AuthDropdown;

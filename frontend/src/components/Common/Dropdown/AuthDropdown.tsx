import React from 'react';
import { useRouter } from 'next/router';
import styled from '@styles/themed-components';
import { Dropdown } from 'semantic-ui-react';
import useEventHandler from '@utils/logEventHandler';
import ClickEventWrapper from '@components/EventWrapper/ClickEventWrapper';

import * as T from '../../../constants/dropdownText';

const AuthDropdown = () => {
  const router = useRouter();

  const logoutEvent = async () => {
    localStorage.clear();
    document.cookie = 'token=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
    alert('로그아웃 되었습니다.');
    window.location.href = '/';
  };

  const logoutLog = {
    eventName: 'logout_event',
    parameters: { page: router.asPath },
  };

  return (
    <Wrapper style={authWrapperStyle}>
      <Dropdown
        style={{
          authDropdownStyle,
        }}
      >
        <Dropdown.Menu direction="left" style={dropdownMenuStyle}>
          <ClickEventWrapper target="Dropdown/Membership">
            <Dropdown.Item style={dropdownItemStyle} text={T.MY_MEMBERSHIP} />
          </ClickEventWrapper>
          <ClickEventWrapper target="Dropdown/Notice">
            <Dropdown.Item style={dropdownItemStyle} text={T.NOTICE} />
          </ClickEventWrapper>
          <ClickEventWrapper target="Dropdown/Setting">
            <Dropdown.Item style={dropdownItemStyle} text={T.ACCOUNT_SETTING} />
          </ClickEventWrapper>
          <ClickEventWrapper target="Dropdown/Logout">
            <Dropdown.Item
              style={dropdownItemStyle}
              text={T.LOGOUT}
              onClick={useEventHandler(logoutEvent, logoutLog)}
            />
          </ClickEventWrapper>
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
  padding: '10px 0',
};

const dropdownItemStyle = {
  fontSize: '14px',
  color: '#2f2f2f',
  width: '125px',
  height: '30px',
  padding: '5px 20px',
  display: 'flex',
  alignItems: 'center',
};

const Wrapper = styled.div<{ style?: any }>`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  .item: hover {
    background: #f2f2f2;
  }
`;

export default AuthDropdown;

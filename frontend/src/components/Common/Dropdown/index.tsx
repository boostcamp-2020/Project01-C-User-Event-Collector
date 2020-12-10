import React from 'react';
import styled from '@styles/themed-components';
import { Dropdown } from 'semantic-ui-react';

interface DropdownProps {
  type: string;
}

const nickname = '아로리';

const DropdownComponent = ({ type }: DropdownProps) => {
  switch (type) {
    case 'auth':
      return (
        <Wrapper>
          <Dropdown text={nickname}>
            <Dropdown.Menu direction="right">
              <Dropdown.Item text="My 멤버십" />
              <Dropdown.Item text="공지사항" />
              <Dropdown.Item text="계정설정" />
              <Dropdown.Item text="로그아웃" />
            </Dropdown.Menu>
          </Dropdown>
        </Wrapper>
      );
    case 'playlist':
      return (
        <Wrapper style={{ position: 'relative' }}>
          <Dropdown
            className="dropdown"
            text=""
            style={{
              position: 'absolute',
              bottom: '5px',
              right: '0px',
              width: '45px',
              height: '35px',
              border: '1px solid red',
              color: 'transparent',
            }}
          >
            <Dropdown.Menu className="dropdown-menu" direction="right">
              <Dropdown.Item className="dropdown-item" text="후아" />
              <Dropdown.Item className="dropdown-item" text="헬로" />
              <Dropdown.Item className="dropdown-item" text="계정설정" />
              <Dropdown.Item className="dropdown-item" text="로그아웃" />
            </Dropdown.Menu>
          </Dropdown>
        </Wrapper>
      );
    default:
      return (
        <Wrapper>
          <Dropdown text="empty">
            <Dropdown.Menu direction="left">
              <Dropdown.Item text=" " />
            </Dropdown.Menu>
          </Dropdown>
        </Wrapper>
      );
  }
};

const Wrapper = styled.div`
  position: relative;
`;

export default DropdownComponent;

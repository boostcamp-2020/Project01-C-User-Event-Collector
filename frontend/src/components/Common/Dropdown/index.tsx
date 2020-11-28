import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const nickname = '아로리';

const DropdownComponent = ({ type }: { type: string }) => {
  switch (type) {
    case 'auth':
      return (
        <Dropdown text={nickname}>
          <Dropdown.Menu direction="right">
            <Dropdown.Item text="My 멤버십" />
            <Dropdown.Item text="공지사항" />
            <Dropdown.Item text="계정설정" />
            <Dropdown.Item text="로그아웃" />
          </Dropdown.Menu>
        </Dropdown>
      );
    default:
      return (
        <Dropdown text="empty">
          <Dropdown.Menu direction="left">
            <Dropdown.Item text=" " />
          </Dropdown.Menu>
        </Dropdown>
      );
  }
};

export default DropdownComponent;

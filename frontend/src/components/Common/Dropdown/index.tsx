import React from 'react';
import styled from '@styles/themed-components';
import { Dropdown } from 'semantic-ui-react';
import useEventHandler from '@hooks/useEventHandler';
import api from '@api/index';
import { usePlayState, usePlayDispatch } from '@context/play';

interface IDropdownProps {
  type: string;
  albumData?: any;
  magData?: any;
  playlistData?: any;
}

const DropdownComponent = ({ type, albumData, magData, playlistData }: IDropdownProps) => {
  const state = usePlayState();
  const dispatch = usePlayDispatch();

  const logData = (name, params) => {
    return {
      eventTime: new Date(),
      eventName: name,
      parameters: params,
    };
  };

  // const addEvent = (id)=>{
  //   api.post()
  // }

  // const removeEvent = (id)=>{
  //   api.post()
  // }

  switch (type) {
    case 'auth':
      return (
        <Wrapper
          style={{
            width: '180px',
            height: '50px',
            textAlign: 'right',
            position: 'absolute',
          }}
        >
          <Dropdown
            style={{
              width: '100%',
              height: '100%',
              textAlign: 'right',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <Dropdown.Menu direction="left" style={dropdownMenuStyle}>
              <Dropdown.Item style={dropdownItemStyle} text="My 멤버십" />
              <Dropdown.Item style={dropdownItemStyle} text="공지사항" />
              <Dropdown.Item style={dropdownItemStyle} text="계정설정" />
              <Dropdown.Item style={dropdownItemStyle} text="로그아웃" />
            </Dropdown.Menu>
          </Dropdown>
        </Wrapper>
      );
    case 'listItem':
      return (
        <Wrapper>
          <Dropdown style={dropdownStyle}>
            <Dropdown.Menu direction="right" style={dropdownMenuStyle}>
              <Dropdown.Item style={dropdownItemStyle} text="보관함에 추가" />
              <Dropdown.Item style={dropdownItemStyle} text="바로 다음에 추가" />
              <Dropdown.Item style={dropdownItemStyle} text="맨 아래에 추가" />
              <Dropdown.Item style={dropdownItemStyle} text="MP3 구매" />
              <Dropdown.Item style={dropdownItemStyle} text="공유" />
            </Dropdown.Menu>
          </Dropdown>
        </Wrapper>
      );
    case 'artist':
      return (
        <Wrapper>
          <Dropdown style={dropdownStyle}>
            <Dropdown.Menu direction="right">
              <Dropdown.Item style={dropdownItemStyle} text="좋아요" />
              <Dropdown.Item style={dropdownItemStyle} text="공유" />
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
  position: relative;
`;

export default DropdownComponent;

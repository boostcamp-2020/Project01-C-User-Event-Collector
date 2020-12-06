import React from 'react';
import styled from '@styles/themed-components';

import { RiOrderPlayFill, RiPlayListAddLine } from 'react-icons/ri';
import { IoMdPlay } from 'react-icons/io';
import { IoShuffleOutline } from 'react-icons/io5';

interface ILargeButtonProps {
  onClick?: React.MouseEventHandler;
  children?: any;
  customType?: string;
}

const LargeButton = ({ onClick, children, customType }: ILargeButtonProps) => {
  switch (customType) {
    case 'play':
      return (
        <PlayButton>
          <IoMdPlay size={20} />
          <span>전체재생</span>
        </PlayButton>
      );
    case 'shuffle':
      return (
        <ShuffleButton>
          <IoShuffleOutline size={20} />
          <span>랜덤재생</span>
        </ShuffleButton>
      );
    case 'addToFirst':
      return (
        <AddPlaylistButton>
          <RiOrderPlayFill style={iconStyle} />
          <span>바로 다음에 추가</span>
        </AddPlaylistButton>
      );
    case 'addToLast':
      return (
        <AddPlaylistButton>
          <RiPlayListAddLine style={iconStyle} />
          <span>맨 아래에 추가</span>
        </AddPlaylistButton>
      );
    default:
      return <CustomButton>{children}</CustomButton>;
  }
};

const iconStyle = {
  marginRight: '4px',
  position: 'relative',
  bottom: '2px',
};

const CustomButton = styled.button<ILargeButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #d7d7d7;
  background: #fbfbfb;
  color: #232323;
  border-radius: 4px;
`;

const HeaderButton = styled(CustomButton)`
  width: 135px;
  height: 42px;
  font-size: 15px;
`;

const PlayButton = styled(HeaderButton)`
  border: solid 1px #ff1150;
  background: #ff1150;
  color: white;
`;

const ShuffleButton = styled(HeaderButton)``;

const AddPlaylistButton = styled(CustomButton)`
  width: 130px;
  height: 36px;
  font-size: 13px;
`;

export default LargeButton;

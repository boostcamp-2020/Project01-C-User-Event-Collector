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
    case 'normal-play':
      return (
        <PlayButton>
          <IoMdPlay size={20} />
          <span>재생</span>
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
          <RiOrderPlayFill />
          <span>바로 다음에 추가</span>
        </AddPlaylistButton>
      );
    case 'addToLast':
      return (
        <AddPlaylistButton>
          <RiPlayListAddLine />
          <span>맨 아래에 추가</span>
        </AddPlaylistButton>
      );
    case 'mp3':
      return (
        <ShuffleButton style={{ width: '100px' }}>
          <span>MP3 구매</span>
        </ShuffleButton>
      );
    default:
      return <CustomButton>{children}</CustomButton>;
  }
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

const PlayButton = styled.button`
  width: 135px;
  height: 42px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: solid 1px #ff1150;
  background: #ff1150;
  color: white;
`;

const ShuffleButton = styled.button`
  width: 135px;
  height: 42px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #d7d7d7;
  background: #fbfbfb;
  color: #232323;
  border-radius: 4px;
`;

const AddPlaylistButton = styled.button`
  width: 130px;
  height: 36px;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #d7d7d7;
  background: #fbfbfb;
  color: #232323;
  border-radius: 4px;
`;

export default LargeButton;

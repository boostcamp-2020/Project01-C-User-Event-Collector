import React from 'react';
import styled from '@styles/themed-components';

interface ILargeButtonProps {
  onClick?: React.MouseEventHandler;
  children?: any;
  customType: string;
}

const LargeButton = ({ onClick, children, customType }: ILargeButtonProps) => (
  <CustomButton onClick={onClick} customType={customType}>
    {children}
  </CustomButton>
);

const CustomButton = styled.button<ILargeButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${props => (props.customType === 'addPlaylist' ? '130px' : '135px')};
  height: ${props => (props.customType === 'addPlaylist' ? '36px' : '42px')};
  font-size: ${props => (props.customType === 'addPlaylist' ? '13px' : '15px')};

  border-radius: 4px;
  border: solid 1px ${props => (props.customType === 'play' ? '#ff1150' : '#d7d7d7')};

  background: ${props => (props.customType === 'play' ? '#ff1150' : '#fbfbfb')};
  color: ${props => (props.customType === 'play' ? 'white' : '#232323')};
`;

export default LargeButton;

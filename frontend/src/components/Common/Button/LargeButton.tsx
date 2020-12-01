import React from 'react';
import styled from '@styles/themed-components';

interface Props {
  onClick?: React.MouseEventHandler;
  children?: any;
  customType: string;
}

const PlayButton = ({ onClick, children, customType }: Props) => (
  <CustomButton onClick={onClick} customType={customType}>
    {children}
  </CustomButton>
);

const CustomButton = styled.a<Props>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 0.95rem;
  padding: 0 1.7rem;
  height: 42px;

  border-radius: 5px;
  border: solid 1px ${props => props.customType === 'play' ? '#ff1150' : '#d7d7d7'};

  color: ${props => props.customType === 'play' ? 'white' : '#232323'};
  background: ${props => props.customType === 'play' ? '#ff1150' : '#fbfbfb'};
`;

export default PlayButton;
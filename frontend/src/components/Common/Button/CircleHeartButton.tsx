import React from 'react';
import styled from 'styled-components';
import { IoHeart } from 'react-icons/io5';

function CircleHeartButton() {
  return (
    <ButtonWrapper>
      <IoHeart size={24} />
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: ${props => props.theme.color.mainBGColor};
  color: ${props => props.theme.color.highlight};
`;

export default CircleHeartButton;

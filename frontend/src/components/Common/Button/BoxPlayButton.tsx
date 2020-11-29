import React from 'react';
import styled from 'styled-components';

function BoxPlayButton() {
  return (
    <ButtonWrapper>
      <Triangle />
    </ButtonWrapper>
  );
}

const Triangle = styled.div`
  position: relative;
  left: 2px;
  border-top: 8px solid transparent;
  border-left: 14px solid ${props => props.theme.color.highlight};
  border-bottom: 8px solid transparent;
`;

const ButtonWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  opacity: 80%;
  transition: 0.3s all;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: none;
  &:hover {
    opacity: 100%;
    transform: scale(1.1);
  }
`;

export default BoxPlayButton;

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
  border-left: 12px solid ${props => props.theme.color.highlight};
  border-bottom: 8px solid transparent;
`;

const ButtonWrapper = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: white;
  opacity: 75%;
  transition: 0.3s all;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: none;
  position: absolute;
  will-change: transform;
  &:hover {
    opacity: 100%;
    transform: scale(1.1);
  }
`;

export default BoxPlayButton;

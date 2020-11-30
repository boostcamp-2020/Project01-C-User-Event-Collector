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
  border-top: 10px solid transparent;
  border-left: 16px solid ${props => props.theme.color.highlight};
  border-bottom: 10px solid transparent;
`;

const ButtonWrapper = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: white;
  opacity: 75%;
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

import React from 'react';
import styled from 'styled-components';

function BoxPlayButton() {
  return (
    <ButtonWrapper>
      <Circle className="circle" />
      <Triangle />
    </ButtonWrapper>
  );
}

const Circle = styled.div`
  width: 50px;
  height: 50px;
  background: white;
  opacity: 80%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Triangle = styled.div`
  border-top: 12px solid transparent;
  border-left: 20px solid ${props => props.theme.color.highlight};
  border-bottom: 12px solid transparent;
  position: absolute;
  top: 25%;
  right: 25%;
`;

const ButtonWrapper = styled.div`
  position: relative;
  &:hover {
    .circle {
      opacity: 100%;
    }
  }
`;

export default BoxPlayButton;

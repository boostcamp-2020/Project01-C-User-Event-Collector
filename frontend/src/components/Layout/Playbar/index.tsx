import BoxPlayButton from '@components/Common/Button/BoxPlayButton';
import React from 'react';
import styled from 'styled-components';

function PlayBar() {
  return (
    <Player>
      playbar
      <BoxPlayButton />
    </Player>
  );
}

const Player = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10400;
  height: 81px;
  background-color: rgba(25, 25, 25, 0.97);
`;

export default PlayBar;

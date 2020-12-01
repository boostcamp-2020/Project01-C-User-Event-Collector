import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const eventHandler = () => {
  axios
    .post('http://localhost:8000/api/log', { eventType: 'clickPlaybar', userAge: 24 })
    .then(res => {
      console.log(res.data);
    });
};

function PlayBar() {
  return <Player onClick={eventHandler}>playbar</Player>;
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

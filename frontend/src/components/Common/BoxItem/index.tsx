import React from 'react';
import styled from 'styled-components';
import { BsThreeDots } from 'react-icons/bs';
import BoxPlayButton from '@components/Common/Button/BoxPlayButton';
import { useRouter } from 'next/router';
import axios from 'axios';

interface EventTargetProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const eventLogHandler = () => {
  axios
    .post('http://localhost:8000/api/log', {
      eventName: 'move_page',
      parameters: { prev: '/today/magTopItem' },
    })
    .then(res => {
      console.log('로그 보냇다!!');
      console.log(res.data);
    });
};

function BoxItem({ imgUrl }) {
  const router = useRouter();
  return (
    <Wrapper onClick={eventLogHandler}>
      <BoxImage src={imgUrl} alt="box-item-image" />
      <ButtonsWrapper className="buttons-wrapper">
        <BoxPlayButton />
        <BsThreeDots size={24} />
      </ButtonsWrapper>
    </Wrapper>
  );
}

const BoxImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ButtonsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  padding: 12px;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  transition: 0.5s all;
  opacity: 0;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5));
`;

const Wrapper = styled.div<EventTargetProps>`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  color: ${props => props.theme.color.mainBGColor};
  &:hover {
    .buttons-wrapper {
      display: flex;
      opacity: 1;
    }
  }
`;

export default BoxItem;

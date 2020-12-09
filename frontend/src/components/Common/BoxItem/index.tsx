import React from 'react';
import styled from 'styled-components';
import { BsThreeDots } from 'react-icons/bs';
import BoxPlayButton from '@components/Common/Button/BoxPlayButton';
import { useRouter } from 'next/router';
import axios from 'axios';

interface EventTargetProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywibmlja25hbWUiOiLslYTroZzrpqwiLCJlbWFpbCI6InNrbmdsZWUyMkBuYXZlci5jb20iLCJwcm9maWxlVVJMIjoiaHR0cHM6Ly9waGluZi5wc3RhdGljLm5ldC9jb250YWN0LzIwMjAwNzA3XzEzNC8xNTk0MDkwNzM4MjIzRFV3d21fSlBFRy8yMDE2MDkxM18xNDMzMTcuanBnIiwiZXhwIjoxNjA3NTEzMjczfQ.b5G4gNeN_qll_dBin0jzQYCD8lOXwf3xbJqHvdVaa88';

const eventLogHandler = pathname => {
  const logData = {
    eventTime: new Date(),
    eventName: 'move_page',
    parameters: { prev: pathname, next: '/magazines/100523' },
  };
  // fetchData(logData);
  axios({
    method: 'post',
    url: 'http://localhost:8000/api/log',
    data: logData,
    headers: {
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${token}`,
      withCredentials: true,
    },
  });
};

function BoxItem({ imgUrl }) {
  const router = useRouter();
  return (
    <Wrapper onClick={e => eventLogHandler(router.pathname)}>
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

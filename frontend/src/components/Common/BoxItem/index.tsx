import React from 'react';
import styled from 'styled-components';
import { BsThreeDots } from 'react-icons/bs';
import BoxPlayButton from '@components/Common/Button/BoxPlayButton';
import { useRouter } from 'next/router';
import useEventHandler from '@hooks/useEventHandler';
import Link from 'next/link';
import api from '../../../api';

interface EventTargetProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

// const eventLogHandler = pathname => {
//   const logData = {
//     eventTime: new Date(),
//     eventName: 'move_page',
//     parameters: { prev: pathname, next: '/magazines/100523' },
//   };
//   api.post('/log', logData);
// };

function BoxItem({ imgUrl, next }) {
  const router = useRouter();
  return (
    <>
      <Link href={`/${next}`}>
        <Wrapper
          onClick={useEventHandler(null, {
            eventTime: new Date(),
            eventName: 'move_page',
            parameters: { prev: router.pathname, next },
          })}
        >
          <BoxImage src={imgUrl} alt="box-item-image" />
          <ButtonsWrapper className="buttons-wrapper">
            <BoxPlayButton />
            <BsThreeDots size={24} />
          </ButtonsWrapper>
        </Wrapper>
      </Link>
    </>
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

import React from 'react';
import styled from 'styled-components';
import { BsThreeDots } from 'react-icons/bs';
import BoxPlayButton from '@components/Common/Button/BoxPlayButton';
import { useRouter } from 'next/router';
import useEventHandler from '@hooks/useEventHandler';
import Link from 'next/link';
import Dropdown from '@components/Common/Dropdown';

interface IBoxItemProps {
  imgUrl: string;
  next: string;
  target: string;
  id: number;
}

function BoxItem({ imgUrl, target, next, id }: IBoxItemProps) {
  const router = useRouter();
  return (
    <>
      <Wrapper>
        <Link href={`/${next}/[id]`} as={`/${next}/${id}`}>
          <BoxImage
            src={imgUrl}
            alt="box-item-image"
            onClick={useEventHandler(null, {
              eventTime: new Date(),
              eventName: 'ClickEvent',
              parameters: {
                page: router.pathname,
                target: `/${`${target}/${id}`}`,
              },
            })}
          />
        </Link>
        <ButtonsWrapper className="buttons-wrapper">
          <BoxPlayButton />
          <BsThreeDots size={24} />
        </ButtonsWrapper>
        <Dropdown type="listItem" />
      </Wrapper>
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

const Wrapper = styled.div`
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

import React from 'react';
import styled from 'styled-components';
import { BsThreeDots } from 'react-icons/bs';
import BoxPlayButton from '@components/Common/Button/BoxPlayButton';
import A from '@components/Common/A';
import BoxDropdown from '@components/Common/Dropdown/BoxDropdown';

interface IBoxItemProps {
  imgUrl: string;
  next: string;
  trackData: any;
  target: string;
  id: number;
}

function BoxItem({ trackData, imgUrl, target, next, id }: IBoxItemProps) {
  return (
    <>
      <Wrapper>
        <A next={next} target={target} id={id}>
          <BoxImage src={imgUrl} alt="box-item-image" />
        </A>

        <ButtonsWrapper className="buttons-wrapper">
          <BoxPlayButton />
          <BsThreeDots size={24} />
        </ButtonsWrapper>
        <BoxDropdown trackData={trackData} type={next} id={id} />
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
  height: 18%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  transition: 0.5s all;
  opacity: 0;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.15));
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

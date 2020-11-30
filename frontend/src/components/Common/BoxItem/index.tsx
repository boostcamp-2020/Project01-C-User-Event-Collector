import React from 'react';
import styled from 'styled-components';
import { BsThreeDots } from 'react-icons/bs';
import BoxPlayButton from '@components/Common/Button/BoxPlayButton';

const imgUrl = 'https://music-phinf.pstatic.net/20200901_92/1598948113558KQlwD_PNG/1.png?type=w720';

function BoxItem() {
  return (
    <Wrapper>
      <BoxImage src={imgUrl} alt="" />
      <ButtonsWrapper className="buttons-wrapper">
        <BoxPlayButton />
        <BsThreeDots size={24} />
      </ButtonsWrapper>
    </Wrapper>
  );
}

const BoxImage = styled.img`
  width: 100%;
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
  width: 300px;
  height: 300px;
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

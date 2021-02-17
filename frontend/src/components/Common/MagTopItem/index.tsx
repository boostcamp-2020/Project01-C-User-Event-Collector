import React from 'react';
import styled from 'styled-components';

import A from '@components/Common/A';
import MagTag from '@components/Common/MagTag';
import BoxItem from '@components/Common/BoxItem';

function MagTopItem({ magData: mag }) {
  const target = 'MagTopItem';

  const resetImgSize = url => {
    if (url) {
      const _url = url.replace(/type=r([0-9])+Fll/gi, 'type=r360Fll');
      return _url;
    }
  };

  return (
    <Wrapper>
      <ImgWrapper>
        <BoxItem
          trackData={mag.tracks}
          target={target}
          imgUrl={resetImgSize(mag.imgUrl)}
          next="magazines"
          id={mag.id}
        />
      </ImgWrapper>
      <A next="magazines" target={target} id={mag.id}>
        <MagContentWrapper>
          <TagWrapper>
            <MagTag type={mag.tag} />
          </TagWrapper>
          <MagTitle>{mag.title}</MagTitle>
          <MagContent>{mag.content}</MagContent>
          <MagContent>{`VIBE MAG · ${mag.date}`}</MagContent>
        </MagContentWrapper>
      </A>
    </Wrapper>
  );
}

const ImgWrapper = styled.div`
  width: 480px;
  height: ${props => props.theme.size.magTopItemHeight};
`;

const TagWrapper = styled.div`
  margin-bottom: 24px;
`;

const MagTitle = styled.a`
  ${props => props.theme.font.bigBoldTitle}
`;

const MagContentWrapper = styled.div`
  background: white;
  width: 640px;
  height: 100%;
  padding: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MagContent = styled.p`
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-all;
  display: block;
  display: -webkit-box;
  height: 40px;
  margin-top: 10px;
  font-size: 14px;
  line-height: 20px;
  color: #939393;
`;

const Wrapper = styled.div`
  width: 964px;
  margin: 0 auto;
  height: ${props => props.theme.size.magTopItemHeight};
  background: white;
  display: flex;
`;

export default MagTopItem;

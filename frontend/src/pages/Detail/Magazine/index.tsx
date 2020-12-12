import React from 'react';
import styled from '@styles/themed-components';

import LargeButton from '@components/Common/Button/LargeButton';

interface IMagazineInfoProps {
  magazineInfo?: MetaMagazine;
}

type MetaMagazine = {
  id: number;
  title: string;
  date: string;
  imgUrl: string;
  tag: string;
  content: string;
  tracks: any[];
};

function MagazineDetail({ magazineInfo: magazine }: IMagazineInfoProps) {

  return (
    <Wrapper>
      <MagHeader>
        <MagHeaderBackground>
          <BlurThumb src={magazine?.imgUrl} />
        </MagHeaderBackground>
        <MagInner>
          <InfoArea>
            <MagBadge>{magazine?.tag.toUpperCase()}</MagBadge>
            <MagTitle>{magazine?.title}</MagTitle>
            <MagContent>{magazine?.content}</MagContent>
            <MagPlayList>
              <MagPlayListInfo>총 {magazine?.tracks?.length}곡 </MagPlayListInfo>
              <MagPlayListLink>플레이리스트 보기</MagPlayListLink>
            </MagPlayList>
            <MagPlayButtonList>
              <ButtonWrapper>
                <LargeButton customType={'play'} />
              </ButtonWrapper>
              <ButtonWrapper>
                <LargeButton customType={'shuffle'} />
              </ButtonWrapper>
            </MagPlayButtonList>
            <MagSub>
              <SubItem>VIBE MAG</SubItem>
              <SubItem Before={true}>{magazine?.date}</SubItem>
            </MagSub>
          </InfoArea>
        </MagInner>
      </MagHeader>
      {/* <MagList /> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-bottom: 200px;
`;

const MagHeader = styled.div`
  position: relative;
  height: 408px;
`;

const MagHeaderBackground = styled.div`
  height: 100%;
  overflow: hidden;
  background: black;
`;

const BlurThumb = styled.img`
  width: 100%;
  object-fit: cover;
  margin-top: -25%;

  opacity: 0.17;
  -webkit-filter:blur(20px);
  -moz-filter:blur(20px);
  -o-filter:blur(20px);
  -ms-filter:blur(20px);
  filter:blur(20px);
`;

const MagInner = styled.div`
  position: absolute;
  display: table;
  width: 964px;
  height: 100%;
  left: 50%;
  bottom: 0;

  color: white;

  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
`;

const InfoArea = styled.div`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
`;

const MagBadge = styled.span`
  display: inline-block;
  background: #781CF5;

  font-size: 14px;
  font-weight: 500;

  padding: 0.5rem 0.9rem;
  border-radius: 1rem;
`;

const MagTitle = styled.h2`
  display: -webkit-box;
  max-height: 96px;
  margin-top: 1.5rem;
  font-size: 2.8rem;
  line-height: 48px;
  font-weight: 800;
  word-break: keep-all;
  white-space: pre-line;

  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const MagContent = styled.h5`
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    display: block;
    display: -webkit-box;
    max-height: 78px;
    margin-top: 8px;
    font-size: 15px;
    line-height: 26px;
    color: hsla(0,0%,100%,.5);
    white-space: pre-line;

    ::after {
      content: "";
      display: block;
      height: 13px;
    }
`;

const MagPlayList = styled.div`
  font-size: 15px;
  line-height: 26px;
  color: hsla(0,0%,100%,.7);

  margin-top: 8px;
`;

const MagPlayListInfo = styled.span`
  display: inline-block;
`;

const MagPlayListLink = styled.a`
  all: unset;
  position: relative;
  display: inline-block;
  margin-left: 14px;

  :hover {
    color: inherit;
  }

  :before {
    display: inline-block;
    vertical-align: top;
    position: absolute;
    content: '';
    top: 13px;
    left: -8px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: #acacac;
  }
  :after {
    display: inline-block;
    background-position: -507px -812px;
    width: 7px;
    height: 12px;
    content: '>';
    vertical-align: top;
    padding: 0 0.2rem;
  }
`;

const MagPlayButtonList = styled.div`
  display: flex;
  justify-content: center;
  
  margin-top: 32px;
  text-align: center;
`;

const ButtonWrapper = styled.span`
  margin-left: 0.55rem;
`;

const MagSub = styled.div`
  position: absolute;
  top: 16px;
  left: 0;
  color: hsla(0,0%,88.2%,.3);
`;

const SubItem = styled.span<{ Before?: boolean }>`
  display: inline-block;
  font-size: 13px;
  line-height: 17px;
  vertical-align: top;

  ${props => props.Before ? `::before {
    display: inline-block;
    vertical-align: top;
    content: "";
    width: 3px;
    height: 3px;
    margin: 7px 3px 0 6px;
    border-radius: 50%;
    color: hsla(0,0%,88.2%,.3);
    }` : ''};
`;

export default MagazineDetail;
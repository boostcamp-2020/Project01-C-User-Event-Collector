import React, { ReactElement } from 'react';
import styled from '@styles/themed-components';

import LargeButton from '@components/Common/Button/LargeButton';

interface ILayout {
  data?: any;
  children: any;
}

// title이라고 하면 _document랑 충돌남
function Layout({ data, children }: ILayout): ReactElement {
  return (
    <Wrapper>
      <Header>
        <HeaderImg src={data.imgUrl} alt="detail-header-img" />
        <HeaderContent>
          <MainTitle>{data.title}</MainTitle>
          {data.debut && data.genre && <SubTitle>{`${data.debut} 데뷔 · ${data.genre}`}</SubTitle>}
          {data.artist && <SubTitle>{data.artist}</SubTitle>}
          {data.date && data.genre && <SubContent>{`${data.date} · ${data.genre}`}</SubContent>}
          {data.songwriter && <SubContent>{`작사 ${data.songwriter}`}</SubContent>}
          {data.composer && <SubContent>{`작곡 ${data.composer}`}</SubContent>}
          <ButtonsWrapper>
            <LargeButton customType="play" />
            <LargeButton customType="shuffle" />
            <LargeButton customType="mp3" />
          </ButtonsWrapper>
        </HeaderContent>
      </Header>
      <DetailContent>{children}</DetailContent>
    </Wrapper>
  );
}

const HeaderImg = styled.img`
  width: 195px;
  height: 195px;
`;

const Wrapper = styled.div`
  padding-top: 41px;
  padding-bottom: 23px;
  margin: auto;
  position: relative;
  max-width: ${props => props.theme.size.mainContentWidth};
  margin: auto;
`;

const Header = styled.header`
  position: relative;
  padding: 20px 0 50px 0;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  justify-content: space-between;
`;

const HeaderContent = styled.div`
  position: relative;
  width: 750px;
  display: flex;
  flex-direction: column;
`;

const MainTitle = styled.span`
  display: block;
  padding-top: 8px;
  ${props => props.theme.font.boldTitle}
`;

const SubTitle = styled.span`
  ${props => props.theme.font.plain}
  font-size: 15px;
  padding: 10px 0;
`;

const SubContent = styled.span`
  ${props => props.theme.font.sub}
  padding-bottom: 8px;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  button {
    margin-right: 10px;
  }
`;

const DetailContent = styled.div`
  padding-top: 34px;
`;

export default Layout;

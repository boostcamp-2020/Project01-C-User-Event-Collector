import React from 'react';
import styled from '@styles/themed-components';

import { IconContext } from 'react-icons';
import { IoMdPlay } from 'react-icons/io';
import { IoShuffleOutline } from 'react-icons/io5';

import LargeButton from '@components/Common/Button/LargeButton';


// title이라고 하면 _document랑 충돌남
function Layout({ mainTitle, type = null, children }) {
  return (
    <Wrapper>
      <Header>
        <Title>
          <SubTitle>보관함</SubTitle>
          <MainTitle>{mainTitle}</MainTitle>
        </Title>
        {type && (
          <IconContext.Provider value={{ size: "1.3rem" }}>
            <PlayButtonWrapper>
              <LargeButton customType={'play'}>
                <IoMdPlay />
                <CostomSpan>전체재생</CostomSpan>
              </LargeButton>
              <LargeButton customType={'suffle'}>
                <IoShuffleOutline />
                <CostomSpan>랜덤재생</CostomSpan>
              </LargeButton>
            </PlayButtonWrapper>
          </IconContext.Provider>
        )}
      </Header>
      {children}
    </Wrapper >
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 964;
  padding-top: 41px;
  padding-bottom: 23px; 
  margin: auto;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-bottom: 25px;
  border-bottom: 1px solid #e4e4e4;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.span`
  display: block;
  font-size: 13px;
  line-height: 17px;
  color: #999;
  font-weight: 400;
`;

const MainTitle = styled.span`
  display: block;
  padding-top: 3px;
  font-size: 30px;
  line-height: 36px;
  color: #232323;
  font-weight: 700;
`;

const PlayButtonWrapper = styled.div`
  position: absolute;
  width: 284px;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-left: 0;
  bottom: 60px;
  right: 0;
`;

const CostomSpan = styled.div`
  padding: 0 0.2rem;
`;

export default Layout;

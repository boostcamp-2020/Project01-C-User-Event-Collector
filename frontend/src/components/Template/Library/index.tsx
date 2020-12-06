import React from 'react';
import styled from '@styles/themed-components';

import { IoMdPlay } from 'react-icons/io';
import { IoShuffleOutline } from 'react-icons/io5';

import LargeButton from '@components/Common/Button/LargeButton';

interface ILayout {
  mainTitle: string;
  type?: null | string;
  children: any;
}

// title이라고 하면 _document랑 충돌남
function Layout({ mainTitle, type, children }: ILayout): ReactE {
  return (
    <Wrapper>
      <Header>
        <Title>
          <SubTitle>보관함</SubTitle>
          <MainTitle>{mainTitle}</MainTitle>
        </Title>
        {type && (
          <PlayButtonWrapper>
            <LargeButton customType="play" />
            <LargeButton customType="shuffle" />
          </PlayButtonWrapper>
        )}
      </Header>
      <LibraryContent>{children}</LibraryContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding-top: 41px;
  padding-bottom: 23px;
  margin: auto;
`;

const Header = styled.header`
  position: relative;
  padding-bottom: 30px;
  border-bottom: 1px solid #e4e4e4;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.span`
  ${props => props.theme.font.sub}
`;

const MainTitle = styled.span`
  display: block;
  padding-top: 8px;
  ${props => props.theme.font.boldTitle}
`;

const PlayButtonWrapper = styled.div`
  width: 284px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 18px;
  right: 0px;
`;

const CustomSpan = styled.div`
  padding: 0 0.2rem;
`;

const LibraryContent = styled.div`
  padding-top: 34px;
`;

export default Layout;

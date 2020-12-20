import React, { ReactElement } from 'react';
import styled from '@styles/themed-components';

import ClickEventWrapper from '@components/EventWrapper/ClickEventWrapper';
import LargeButton from '@components/Common/Button/LargeButton';

interface ILayout {
  mainTitle: string;
  type?: null | string;
  children: any;
}

function Layout({ mainTitle, type, children }: ILayout): ReactElement {
  return (
    <Wrapper>
      <Header>
        <Title>
          <SubTitle>보관함</SubTitle>
          <MainTitle>{mainTitle}</MainTitle>
        </Title>
        {type && (
          <PlayButtonWrapper>
            <ClickEventWrapper target="PlayAllBtn">
              <LargeButton customType="play" />
            </ClickEventWrapper>
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
  position: relative;
  max-width: ${props => props.theme.size.mainContentWidth};
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

const LibraryContent = styled.div`
  padding-top: 34px;
`;

export default Layout;

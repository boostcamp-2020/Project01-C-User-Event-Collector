import React from 'react';
import styled from '@styles/themed-components';
import SideBar from '@components/Layout/SideBar';
import PlayBar from '@components/Layout/PlayBar';
import Footer from '@components/Layout/Footer';

function Layout({ children }) {
  return (
    <Wrapper>
      <SideBar />
      <Container>
        <Content>{children}</Content>
      </Container>
      <Footer />
      <PlayBar />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: auto;
  min-height: 100%;
  overflow-x: hidden;
`;

const Container = styled.div`
  ${props => props.theme.media.tablet`
    padding-bottom: 498px;
    padding-left: 0;
    padding-top: 0;
    min-height: 540px;
    padding: 67 0 0;
  `}
  // desktop
  background: ${props => props.theme.color.mainBGColor};
  padding-left: 225px;
  min-height: 600px;
  height: auto;
  margin: 0;
`;

// todaypage 빼고 다 max-width 964임.
const Content = styled.div`
  position: relative;
  max-width: 1060px;
  padding: 0 43px;
  margin: auto;
`;

export default Layout;

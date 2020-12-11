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
  background: ${props => props.theme.color.mainBGColor};
  padding-left: ${props => props.theme.size.sidebarWidth};
  min-height: 600px;
  height: auto;
  margin: 0;
`;

// todaypage 빼고 다 max-width 964임.
const Content = styled.div``;

export default Layout;

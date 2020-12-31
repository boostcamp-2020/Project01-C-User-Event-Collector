import React from 'react';
import styled from '@styles/themed-components';
import SideBar from '@components/Layout/SideBar';
import PlayBar from '@components/Layout/PlayBar';
import Footer from '@components/Layout/Footer';
import useLogError from '@hooks/useLogError';

function Layout({ children }) {
  useLogError();

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
  position: relative;
  margin: auto;
  min-height: 100vh;
  overflow-x: hidden;
`;

const Container = styled.div`
  background: ${props => props.theme.color.mainBGColor};
  padding-left: ${props => props.theme.size.sidebarWidth};
  padding-bottom: 350px;
  min-height: 600px;
  margin: 0;
`;

const Content = styled.div`
  width: auto;
`;

export default Layout;

import React from 'react';
import styled from '@public/styles/themed-components';
import Sidebar from './Sidebar';
import Playbar from './Playbar';

function Layout({ children }) {
  return (
    <Wrapper>
      <Sidebar />
      <Container>{children}</Container>
      <Playbar />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: auto;
  position: relative;
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
  flex: 1;
  background: ${props => props.theme.color.mainBGColor};
  padding-left: 225px;
  margin: 0;
`;

export default Layout;

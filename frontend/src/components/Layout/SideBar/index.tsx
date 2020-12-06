import React from 'react';
import styled from '@styles/themed-components';
import NavBar from './NavBar';
import Header from './Header';

function Sidebar() {
  return (
    <Container>
      <Header />
      <NavBar />
    </Container>
  );
}

const Container = styled.header`
  width: ${props => props.theme.size.sidebarWidth};
  top: 0;
  bottom: 81px;
  left: 0;
  position: fixed;
  z-index: 10100;
  background: ${props => props.theme.color.black};
  color: ${props => props.theme.color.headerNavColor};
  padding: 1rem;
`;

export default Sidebar;

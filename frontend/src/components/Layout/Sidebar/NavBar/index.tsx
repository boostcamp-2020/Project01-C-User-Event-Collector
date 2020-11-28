import React from 'react';
import styled from '@public/styles/themed-components';
import Dropdown from '@components/Common/Dropdown';

function NavBar() {
  return (
    <Container>
      <Dropdown />
    </Container>
  );
}

const Container = styled.header`
  background: pink;
  width: 100px;
  height: 600px;
`;

export default NavBar;

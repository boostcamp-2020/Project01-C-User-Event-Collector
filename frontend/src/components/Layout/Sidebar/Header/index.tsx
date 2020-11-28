import React from 'react';
import styled from '@public/styles/themed-components';
import Image from 'next/image';

function Header() {
  return (
    <Container>
      <Image alt="header-logo" src="/images/header-logo.png" width={400} height={200} />
      <SearchButton>ㅇ</SearchButton>
    </Container>
  );
}

const SearchButton = styled.button`
  background-color: gold;
  width: 30px;
  height: 30px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${props => props.theme.color.black};
  color: ${props => props.theme.color.headerNavColor};
  font-size: 2.5rem;
  font-weight: 400;
`;

export default Header;

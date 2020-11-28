import React from 'react';
import styled from '@public/styles/themed-components';
import { CgSearch } from 'react-icons/cg';
import Image from 'next/image';

function Header() {
  return (
    <Container>
      <ImageWrapper>
        <Image alt="header-logo" src="/images/header-logo.png" width={125} height={45} />
      </ImageWrapper>
      <IconWrapper>
        <CgSearch size="26" className="search-icon" />
      </IconWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid blue;
`;

const ImageWrapper = styled.div`
  cursor: pointer;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  height: 30px;
  align-items: flex-start;
  &:hover {
    color: white;
  }
`;

export default Header;

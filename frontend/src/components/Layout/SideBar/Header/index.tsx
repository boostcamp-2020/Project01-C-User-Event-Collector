import React from 'react';
import styled from '@styles/themed-components';
import { CgSearch } from 'react-icons/cg';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <Container>
      <ImageWrapper>
        <Link href="/today">
          <Image alt="header-logo" src="/images/header-logo.png" width={125} height={45} />
        </Link>
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
    color: ${props => props.theme.color.white};
  }
`;

export default Header;

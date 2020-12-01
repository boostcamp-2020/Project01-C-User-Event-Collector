import React from 'react';
import Link from 'next/link';
import styled from '@public/styles/themed-components';
import { FaBookOpen, FaMusic, FaTrophy, FaRecordVinyl, FaRegCalendar } from 'react-icons/fa';

function NavList() {
  return (
    <Container>
      <NavItemWrapper>
        <Link href="/today">
          <NavItem>
            <FaMusic />
            <ItemText>투데이</ItemText>
          </NavItem>
        </Link>
        <Link href="/chart">
          <NavItem>
            <FaTrophy />
            <ItemText>차트</ItemText>
          </NavItem>
        </Link>
        <Link href="/dj-station">
          <NavItem>
            <FaRecordVinyl />
            <ItemText>DJ 스테이션</ItemText>
          </NavItem>
        </Link>
        <Link href="/magazines">
          <NavItem>
            <FaBookOpen />
            <ItemText>VIBE MAG</ItemText>
          </NavItem>
        </Link>
        <Link href="/playlist">
          <NavItem>
            <FaRegCalendar />
            <ItemText>이달의 노래</ItemText>
          </NavItem>
        </Link>
      </NavItemWrapper>
      <NavItemWrapper>
        <LibraryTag>보관함</LibraryTag>
        <NavItem>믹스테잎</NavItem>
        <Link href="/library/mytrack">
          <NavItem>노래</NavItem>
        </Link>
        <NavItem>아티스트</NavItem>
        <NavItem>앨범</NavItem>
        <NavItem>플레이리스트</NavItem>
        <NavItem>받은노래</NavItem>
        <NavItem>구매한 MP3</NavItem>
      </NavItemWrapper>
    </Container>
  );
}

const LibraryTag = styled.span`
  font-size: 0.8rem;
  position: relative;
  top: 4px;
  color: ${props => props.theme.color.grey};
`;

const ItemText = styled.span`
  margin-left: 10px;
  position: relative;
  bottom: 3px;
`;

const NavItemWrapper = styled.ul`
  padding-top: 16px;
`;

const NavItem = styled.li`
  margin: 20px 0;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.color.white};
  }
`;

const Container = styled.div`
  padding: 0 8px;
`;

export default NavList;

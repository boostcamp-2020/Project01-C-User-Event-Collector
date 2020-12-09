import React from 'react';
import Link from 'next/link';
import styled from '@styles/themed-components';
import { FaMusic } from 'react-icons/fa';
// import { FaBookOpen, FaMusic, FaTrophy, FaRecordVinyl, FaRegCalendar } from 'react-icons/fa';
import { useRouter } from 'next/router';

interface NavItemProps {
  isSelected?: boolean;
}

function NavList() {
  const router = useRouter();
  return (
    <Container>
      <NavItemWrapper>
        <Link href="/today">
          <NavItem isSelected={router.pathname === '/today'}>
            <FaMusic size={18} />
            <ItemText>투데이</ItemText>
          </NavItem>
        </Link>
        {/* <Link href="/chart">
          <NavItem isSelected={router.pathname === '/chart'}>
            <FaTrophy size={18} />
            <ItemText>차트</ItemText>
          </NavItem>
        </Link>
        <Link href="/dj-station">
          <NavItem isSelected={router.pathname === '/dj-station'}>
            <FaRecordVinyl size={18} />
            <ItemText>DJ 스테이션</ItemText>
          </NavItem>
        </Link>
        <Link href="/magazines">
          <NavItem isSelected={router.pathname === '/magazines'}>
            <FaBookOpen size={18} />
            <ItemText>VIBE MAG</ItemText>
          </NavItem>
        </Link>
        <Link href="/playlist">
          <NavItem isSelected={router.pathname === '/playlist'}>
            <FaRegCalendar size={18} />
            <ItemText>이달의 노래</ItemText>
          </NavItem>
        </Link> */}
      </NavItemWrapper>
      <NavItemWrapper>
        <LibraryTag>보관함</LibraryTag>
        <Link href="/library/mixtapes">
          <NavItem isSelected={router.pathname === '/library/mixtapes'}>믹스테잎</NavItem>
        </Link>
        <Link href="/library/tracks">
          <NavItem isSelected={router.pathname === '/library/tracks'}>노래</NavItem>
        </Link>
        <Link href="/library/artists">
          <NavItem isSelected={router.pathname === '/library/artists'}>아티스트</NavItem>
        </Link>
        <Link href="/library/albums">
          <NavItem isSelected={router.pathname === '/library/albums'}>앨범</NavItem>
        </Link>
        <Link href="/library/playlists">
          <NavItem isSelected={router.pathname === '/library/playlists'}>플레이리스트</NavItem>
        </Link>
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
  margin-left: 9px;
  position: relative;
  top: 2px;
`;

const NavItemWrapper = styled.ul`
  padding-top: 16px;
`;

const NavItem = styled.li<NavItemProps>`
  color: ${props =>
    props.isSelected ? `${props.theme.color.highlight}` : `${props.theme.color.headerNavColor}`};
  margin: 20px 0;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    filter: ${props => (props.isSelected ? 'brightness(80%)' : 'brightness(120%)')};
  }
`;

const Container = styled.div`
  padding: 0 8px;
`;

export default NavList;

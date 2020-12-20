import React from 'react';
import styled from '@styles/themed-components';
import { FaMusic } from 'react-icons/fa';
import { useRouter } from 'next/router';
import A from '@components/Common/A';

interface NavItemProps {
  isSelected?: boolean;
}

function NavList() {
  const router = useRouter();
  const target = 'SideBarNav';
  return (
    <Container>
      <NavItemWrapper>
        <A next="today" target={target}>
          <NavItem isSelected={router.pathname === '/today'}>
            <FaMusic size={18} />
            <ItemText>투데이</ItemText>
          </NavItem>
        </A>
      </NavItemWrapper>
      <NavItemWrapper>
        <LibraryTag>보관함</LibraryTag>
        <A next="library/tracks" target={target}>
          <NavItem isSelected={router.pathname === '/library/tracks'}>노래</NavItem>
        </A>
        <A next="library/artists" target={target}>
          <NavItem isSelected={router.pathname === '/library/artists'}>아티스트</NavItem>
        </A>
        <A next="library/albums" target={target}>
          <NavItem isSelected={router.pathname === '/library/albums'}>앨범</NavItem>
        </A>
        <A next="library/playlists" target={target}>
          <NavItem isSelected={router.pathname === '/library/playlists'}>플레이리스트</NavItem>
        </A>
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
  padding-top: 10px;
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

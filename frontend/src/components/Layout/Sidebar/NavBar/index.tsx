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
  ${props => props.theme.media.tablet`
    right: 0;
    left: 0;
    bottom: auto;
    width: auto;
    height: 67px;

    background-color: transparent;
    background-image: linear-gradient(180deg,rgba(0,0,0,.5),transparent);
    transition: background-color .4s ease-in-out;

    color: white;
    font-size: 2rem;
  `}
  // desktop
  width: 225px;
  top: 0;
  bottom: 81px;
  left: 0;
  position: fixed;
  z-index: 10100;
  background: ${props => props.theme.color.black};
  color: ${props => props.theme.color.headerNavColor};
  font-size: 2.5rem;
  font-weight: 400;

  // common
  padding: 1rem;
`;

export default Sidebar;

import React from 'react';
import styled from '@public/styles/themed-components';
import Dropdown from '@components/Common/Dropdown';
import NavList from './NavList';

const profileImgUrl =
  'https://phinf.pstatic.net/contact/20200707_134/1594090738223DUwwm_JPEG/20160913_143317.jpg?type=s33';

function NavBar() {
  return (
    <Container>
      <AuthWrapper>
        <ProfileImg src={profileImgUrl} />
        <Dropdown type="auth" />
      </AuthWrapper>
      <NavList />
    </Container>
  );
}
const ProfileImg = styled.img`
  width: 30px;
  border-radius: 50%;
  margin: 10px;
`;

const AuthWrapper = styled.div`
  display: flex;
  margin: 10px 0;
  align-items: center;
  border-top: 0.5px solid ${props => props.theme.color.darkgrey};
  border-bottom: 0.5px solid ${props => props.theme.color.darkgrey};
`;

const Container = styled.header`
  height: 900px;
`;

export default NavBar;

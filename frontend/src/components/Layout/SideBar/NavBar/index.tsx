import React, { useEffect, useState } from 'react';
import styled from '@styles/themed-components';

import api from '@api/index';
import Dropdown from '@components/Common/Dropdown';
import { useAuthState, useAuthDispatch } from '@context/AuthContext';
import NavList from './NavList';

const loginEvent = () => {
  window.location.href = process.env.NEXT_PUBLIC_NAVER_LOGIN_URL as string;
};

function NavBar() {
  const state = useAuthState();
  const dispatch = useAuthDispatch();
  const { userInfo } = state;
  const [userState, setUserState] = useState(userInfo);

  useEffect(() => {
    setUserState(userInfo);
    api.defaults.headers.authorization = localStorage.getItem('token');
    console.log('userInfo ;;;;;', userInfo);
    if (!userInfo.isLoggedIn) {
      api.get('user').then(res => {
        if (res.data.success) setUserState({ ...res.data?.user, isLoggedIn: true });
      });
    }
  }, [dispatch, userInfo.isLoggedIn, userInfo]);

  return (
    <Container>
      {userState.isLoggedIn ? (
        <AuthWrapper>
          <ProfileImg src={userState?.profileURL} alt="profile-img" />
          {userState?.nickname}
          <Dropdown type="auth" />
        </AuthWrapper>
      ) : (
        <AuthWrapper onClick={loginEvent}>
          <ProfileImg src={userState?.profileURL} alt="profile-img" />
          로그인
        </AuthWrapper>
      )}
      <NavList />
    </Container>
  );
}

const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
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

const Container = styled.nav`
  height: 900px;
`;

export default NavBar;

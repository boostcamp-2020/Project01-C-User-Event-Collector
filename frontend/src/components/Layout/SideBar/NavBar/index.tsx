import React, { useEffect } from 'react';
import styled from '@styles/themed-components';

import Dropdown from '@components/Common/Dropdown';
import { useAuthDispatch, useAuthState } from '@context/AuthContext';
import api from '@api/index';
import NavList from './NavList';

const loginEvent = () => {
  window.location.href = process.env.NEXT_PUBLIC_NAVER_LOGIN_URL as string;
};

function NavBar() {
  const state = useAuthState();
  const dispatch = useAuthDispatch();
  const { userInfo } = state;

  const fetchData = () => {
    api.defaults.headers.authorization = localStorage.getItem('token');
    api.get('/user').then(res => {
      const userData = res.data.user;
      if (userData)
        dispatch({
          type: 'SET_USERINFO',
          userInfo: {
            id: userData?.id,
            isLoggedIn: true,
            nickName: userData?.nickname,
            imgUrl: userData?.profileURL,
          },
        });
    });
  };

  useEffect(() => {
    fetchData();
    console.log('NAVBAR useEFFECT');
  }, [dispatch]);

  return (
    <Container>
      {userInfo.isLoggedIn ? (
        <AuthWrapper>
          <ProfileImg src={userInfo.imgUrl} alt="profile-img" />
          {userInfo?.nickName}
          <Dropdown type="auth" />
        </AuthWrapper>
      ) : (
        <AuthWrapper onClick={loginEvent}>
          <ProfileImg src={userInfo.imgUrl} alt="profile-img" />
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

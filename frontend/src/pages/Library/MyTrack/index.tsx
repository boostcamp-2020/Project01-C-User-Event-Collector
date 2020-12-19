import styled from '@styles/themed-components';
import Library from '@components/Template/Library';
import { useEffect } from 'react';
import { useAuthDispatch, useAuthState } from '@context/AuthContext';
import TrackList from '@components/TrackList';
import LargeButton from '@components/Common/Button/LargeButton';

const MyTrack = ({ trackList }) => {
  const state = useAuthState();
  const dispatch = useAuthDispatch();
  const {
    userInfo: { isLoggedIn },
  } = state;

  useEffect(() => {
    if (trackList)
      dispatch({
        type: 'SET_TRACKLIST',
        trackList: trackList.map(track => track.id),
      });
  }, [dispatch]);

  return (
    <Library mainTitle="노래" type="track">
      <Wrapper>
        <ButtonsWrapper>
          <LargeButton customType="addToFirst" />
          <LargeButton customType="addToLast" />
        </ButtonsWrapper>
        {isLoggedIn ? (
          <TrackList trackList={trackList} />
        ) : (
          <div
            style={{ textAlign: 'center', fontSize: '13px', position: 'relative', top: '100px' }}
          >
            로그인이 필요한 서비스입니다.
          </div>
        )}
      </Wrapper>
    </Library>
  );
};

const Wrapper = styled.div`
  padding-bottom: 200px;
`;

const ButtonsWrapper = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: 16px;
`;

export default MyTrack;

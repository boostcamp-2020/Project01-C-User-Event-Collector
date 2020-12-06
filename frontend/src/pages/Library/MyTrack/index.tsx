import styled from '@styles/themed-components';
import Library from '@components/Template/Library';

import TrackItem from '@components/Common/TrackItem';
import LargeButton from '@components/Common/Button/LargeButton';
import { RiOrderPlayFill, RiPlayListAddLine } from 'react-icons/ri';

const MyTrack = ({ trackList }) => {
  return (
    <Library mainTitle="노래" type="track">
      <Wrapper>
        <ButtonsWrapper>
          <LargeButton customType="addPlaylist">
            <RiOrderPlayFill style={iconStyle} />
            <span>바로 다음에 추가</span>
          </LargeButton>
          <LargeButton customType="addPlaylist">
            <RiPlayListAddLine style={iconStyle} />
            <span>맨 아래에 추가</span>
          </LargeButton>
        </ButtonsWrapper>
        {trackList?.map(track => (
          <TrackItem key={track.id} type="checkbox" trackMetaData={track} />
        ))}
      </Wrapper>
    </Library>
  );
};

const iconStyle = {
  marginRight: '4px',
  position: 'relative',
  bottom: '2px',
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

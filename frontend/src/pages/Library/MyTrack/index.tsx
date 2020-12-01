import styled from '@styles/themed-components';
import Library from '@components/Template/Library/index.tsx';

import TrackItem from '@components/Common/TrackItem';

const imgUrl =
  'https://musicmeta-phinf.pstatic.net/album/005/093/5093644.jpg?type=r480Fll&v=20201116163707';
const artists = ['Tones And I'];

const MyTrack = () => (
  <Library mainTitle={'노래'} type={'track'}>
    <Wrapper>
      <TrackItem
        type="checkBox"
        title="Fly Away"
        artists={artists}
        album="Fly Away"
        imgUrl={imgUrl}
      />
    </Wrapper>
  </Library>
);

const Container = styled.div`
`;

const Wrapper = styled.div`
  padding-bottom: 200px;
`;

export default MyTrack;

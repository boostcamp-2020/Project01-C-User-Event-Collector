import React from 'react';
import styled from '@public/styles/themed-components';
import TrackItem from '@components/Common/TrackItem';

const imgUrl =
  'https://musicmeta-phinf.pstatic.net/album/005/093/5093644.jpg?type=r480Fll&v=20201116163707';
const artists = ['Tones And I'];

function MyTrack() {
  return (
    <Wrapper>
      <TrackItem
        type="checkBox"
        title="Fly Away"
        artists={artists}
        album="Fly Away"
        imgUrl={imgUrl}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-bottom: 200px;
`;

export default MyTrack;

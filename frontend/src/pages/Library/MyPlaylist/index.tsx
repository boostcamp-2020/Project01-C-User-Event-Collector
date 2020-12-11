import styled from '@styles/themed-components';

import Library from '@components/Template/Library';
import PlaylistList from '@components/PlaylistList';

const MyPlaylist = ({ playlistList }) => (
  <Library mainTitle="플레이리스트">
    <Container>
      <PlaylistList playlistList={playlistList} />
    </Container>
  </Library>
);

const Container = styled.div``;

export default MyPlaylist;

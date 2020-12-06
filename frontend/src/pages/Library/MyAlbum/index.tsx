import styled from '@styles/themed-components';

import Library from '@components/Template/Library';
import AlbumList from '@components/AlbumList';

const MyAlbum = ({ albumList }) => (
  <Library mainTitle="앨범">
    <Container>
      <AlbumList albumList={albumList} />
    </Container>
  </Library>
);

const Container = styled.div``;

export default MyAlbum;

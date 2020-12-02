import styled from '@styles/themed-components';

import Library from '@components/Template/Library';
import ArtistList from '@components/ArtistList';

const MyArtist = () => (
  <Library mainTitle="아티스트">
    <Container>
      <ArtistList />
    </Container>
  </Library>
);

const Container = styled.div``;

export default MyArtist;

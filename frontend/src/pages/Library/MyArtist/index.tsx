import styled from '@styles/themed-components';

import Library from '@components/Template/Library';
import ArtistList from '@components/ArtistList';

const MyArtist = ({ artistList }) => (
  <Library mainTitle="아티스트">
    <Container>
      <ArtistList artistList={artistList} />
    </Container>
  </Library>
);

const Container = styled.div``;

export default MyArtist;

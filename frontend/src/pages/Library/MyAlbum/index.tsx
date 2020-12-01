import styled from '@styles/themed-components';
import Library from '@components/Template/Library/index.tsx';

const MyAlbum = () => (
  <Library mainTitle={'앨범'}>
    <Container>
      앨범
    </Container>
  </Library>
);

const Container = styled.div`
`;

export default MyAlbum;

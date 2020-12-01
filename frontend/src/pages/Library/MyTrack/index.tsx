import styled from '@styles/themed-components';
import Library from '@components/Template/Library/index.tsx';

const MyTrack = () => (
  <Library mainTitle={'노래'} type={'track'}>
    <Container>
      hello
    </Container>
  </Library>
);

const Container = styled.div`
`;

export default MyTrack;

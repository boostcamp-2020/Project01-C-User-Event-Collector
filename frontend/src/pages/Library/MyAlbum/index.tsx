import styled from '@styles/themed-components';
import Library from '@components/Template/Library';

const MyAlbum = ({ albumList }) => (
  <Library mainTitle="앨범">
    <Container>앨범</Container>
    {albumList.map(album => (
      <div key={album.id}>
        <img src={album.imgUrl} alt="album-img-url" style={{ width: '100px' }} />
        <h6>{album.name}</h6>
      </div>
    ))}
  </Library>
);

const Container = styled.div``;

export default MyAlbum;

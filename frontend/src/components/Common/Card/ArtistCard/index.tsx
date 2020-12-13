import React from 'react';
import styled from '@styles/themed-components';
import CircleImage from '@components/Common/CircleImage';
import CircleHeartButton from '@components/Common/Button/CircleHeartButton';
import A from '@components/Common/A';

interface IArtistMetaProps {
  artistMetaData: ArtistMeta;
  type?: string | null;
}

type ArtistMeta = {
  id: number;
  name: string;
  debut: string;
  imgUrl: string;
};

const deleteArtist = async (e, id) => {
  // await api.delete(`library/artists/${id}`);
  console.log('아티스트 삭제');
  e.target.closest('.artist-card').style.opacity = '0';
  e.target.closest('.artist-card').style.transform = 'translate(0px, -35px)';
};

const ArtistCard = ({ artistMetaData: artist, type }: IArtistMetaProps) => {
  const target = 'ArtistCard';
  return (
    <Container className="artist-card">
      <ImageContainer>
        <A next="artist" target={target} id={artist.id}>
          <CircleImage imageSrc={artist.imgUrl} />
        </A>
        {type && (
          <ButtonWrapper onClick={e => deleteArtist(e, artist.id)}>
            <CircleHeartButton />
          </ButtonWrapper>
        )}
      </ImageContainer>
      <A next="artist" target={target} id={artist.id}>
        <ArtistTitle>{artist.name}</ArtistTitle>
      </A>
    </Container>
  );
};

const Container = styled.ul`
  width: ${props => props.theme.size.smallCarouselContentWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 1s;
  position: relative;
`;

const ImageContainer = styled.a`
  position: relative;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 6px;
  bottom: 0;
  border-radius: 50%;
`;

const ArtistTitle = styled.a`
  ${props => props.theme.font.plain}
  display: inline-blocK;
  margin-top: 10px;
`;

export default ArtistCard;

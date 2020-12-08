import React from 'react';
import styled from '@styles/themed-components';
import CircleImage from '@components/Common/CircleImage';
import CircleHeartButton from '@components/Common/Button/CircleHeartButton';

interface IArtistMetaProps {
  artistMetaData?: ArtistMeta;
}

type ArtistMeta = {
  id?: number;
  name?: string;
  debut?: string;
  imgUrl?: string;
};

const ArtistCard = ({ artistMetaData }: IArtistMetaProps) => {
  return (
    <Container>
      <CardContainer>
        <ImageContainer>
          <CircleImage imageSrc={artistMetaData?.imgUrl} />
          <ButtonWrapper>
            <CircleHeartButton />
          </ButtonWrapper>
        </ImageContainer>
      </CardContainer>
      <ArtistTitle>{artistMetaData?.name}</ArtistTitle>
    </Container>
  );
};

const Container = styled.ul`
  text-align: center;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardContainer = styled.div`
  width: ${props => props.theme.size.smallCarouselContentWidth};
  height: ${props => props.theme.size.smallCarouselContentWidth};
`;

const ImageContainer = styled.a`
  position: relative;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 6px;
  bottom: 0;
`;

const ArtistTitle = styled.a`
  ${props => props.theme.font.plain}
  display: inline-blocK;
  margin-top: 10px;
`;

export default ArtistCard;

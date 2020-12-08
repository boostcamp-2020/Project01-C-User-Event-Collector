import React from 'react';
import styled from '@styles/themed-components';

import { IoHeart } from 'react-icons/io5';
import CircleImage from '@components/Common/CircleImage';

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
          <LikeButton>
            <IoHeart size={24} />
          </LikeButton>
        </ImageContainer>
      </CardContainer>
      <ArtistTitle>{artistMetaData?.name}</ArtistTitle>
    </Container>
  );
};

const Container = styled.ul`
  text-align: center;
  margin: 0 18px 18px 0;
  &:nth-child(5n) {
    margin-right: 0;
  }
`;

const CardContainer = styled.div`
  width: ${props => props.theme.size.smallCarouselContentWidth};
  height: ${props => props.theme.size.smallCarouselContentWidth};
`;

const ImageContainer = styled.a`
  position: relative;
`;

const LikeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 6px;
  bottom: 0;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: ${props => props.theme.color.mainBGColor};
  color: ${props => props.theme.color.highlight};
`;

const ArtistTitle = styled.a`
  ${props => props.theme.font.plain}
  display: inline-blocK;
  margin-top: 10px;
`;

export default ArtistCard;

import React from 'react';
import styled from '@styles/themed-components';

import { IconContext } from 'react-icons';
import { IoHeart } from 'react-icons/io5';
import CircleImage from '@components/Common/CircleImage';

interface ArtistMetaProps {
  artistMetaData?: ArtistMeta;
}

type ArtistMeta = {
  id: number;
  name: string;
  src: string;
}

const ArtistCard = ({ artistMetaData }: ArtistMetaProps) => {
  const name = 'BLACKPINK';
  const src = 'https://musicmeta-phinf.pstatic.net/artist/000/500/500555.jpg?type=ff300_300&v=20201002130007'
  return (
    <Container>
      <CardContainer>
        <ImageContainer>
          <CircleImage imageSrc={src} />
          <LikeButton>
            <IconContext.Provider value={{ color: "red", size: "1.4rem" }}>
              <IoHeart />
            </IconContext.Provider>
          </LikeButton>
        </ImageContainer>
      </CardContainer>
      <ArtistTitle>{name}</ArtistTitle>
    </Container>
  )
};

const Container = styled.ul`
  width: auto;
  height: auto;
`;

const CardContainer = styled.div`
`;

const ImageContainer = styled.a`
  position: relative;
`;

const LikeButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 6px;
  bottom: 0;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: #fbfbfb;
`;

const ArtistTitle = styled.div`
  text-align: center;
  font-size: 15px;
  padding-top: 0.5rem;
`;

export default ArtistCard;

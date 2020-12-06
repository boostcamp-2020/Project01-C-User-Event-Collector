import React from 'react';
import styled from '@styles/themed-components';

import { IconContext } from 'react-icons';
import { IoHeart } from 'react-icons/io5';
import CircleImage from '@components/Common/CircleImage';

interface ArtistMetaProps {
  artistMetaData?: ArtistMeta;
}

type ArtistMeta = {
  id?: number;
  name?: string;
  debut?: string;
  imgUrl?: string;
};

const ArtistCard = ({ artistMetaData }: ArtistMetaProps) => {
  return (
    <Container>
      <CardContainer>
        <ImageContainer>
          <CircleImage imageSrc={artistMetaData?.imgUrl} />
          <LikeButton>
            <IconContext.Provider value={{ color: 'red', size: '1.4rem' }}>
              <IoHeart />
            </IconContext.Provider>
          </LikeButton>
        </ImageContainer>
      </CardContainer>
      <ArtistTitle>{artistMetaData?.name}</ArtistTitle>
    </Container>
  );
};

const Container = styled.ul`
  margin: 0 18px 18px 0;
  &:nth-child(5n) {
    margin-right: 0;
  }
`;

const CardContainer = styled.div``;

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

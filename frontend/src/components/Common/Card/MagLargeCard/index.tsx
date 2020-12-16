import React from 'react';
import styled from '@styles/themed-components';

import TrackItem from '@components/Common/TrackItem';
import description from '../../../../data/DescriptionSample';

const MagLargeCard = ({ data }) => {
  return (
    <Container>
      <Title>{data.title} &#60;{data.album.name}&#62;</Title>
      <ImageContainer src={data.album.imgUrl} />
      <Description>{description}</Description>
      <TrackItem
        key={data.id}
        trackMetaData={data}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  padding: 1rem 0;
`;

const ImageContainer = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
`;

const Description = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #333;
  line-height: 1.8rem;
  padding: 1rem 0;
`;

export default MagLargeCard;

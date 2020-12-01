import React from 'react';
import styled from '@styles/themed-components';


const CircleImage = ({imageSrc}) => {
  return (
  <Container src={imageSrc} />
  )
};

const Container = styled.img`
  width: 180px;
  border-radius: 100px;
`;

export default CircleImage;

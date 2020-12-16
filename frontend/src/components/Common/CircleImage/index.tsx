import React from 'react';
import styled from '@styles/themed-components';

const CircleImage = ({ imageSrc, alt }) => {
  return <Container src={imageSrc} alt={alt}/>;
};

const Container = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export default CircleImage;

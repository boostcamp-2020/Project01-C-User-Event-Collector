import React from 'react';
import styled from '@styles/themed-components';

const Spinner = () => {
  return (
    <Wrapper>
      <Image src="/images/spinnerSmallCat.gif" alt="spinner" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 280px;
`;

export default Spinner;

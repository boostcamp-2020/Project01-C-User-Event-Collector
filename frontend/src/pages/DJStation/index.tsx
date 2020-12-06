import React from 'react';
import styled from '@styles/themed-components';
import MagTopItem from '@components/Common/MagTopItem';

function DJStation() {
  return (
    <Wrapper>
      <TopWrapper>
        <MagTopItem />
      </TopWrapper>
    </Wrapper>
  );
}

const TopWrapper = styled.div`
  padding: 40px 120px;
  background-color: ${props => props.theme.color.lightgrey};
`;

const Wrapper = styled.div`
  padding-bottom: 200px;
`;

export default DJStation;
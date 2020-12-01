import React from 'react';
import styled from '@styles/themed-components';
import MagTopItem from '@components/Common/MagTopItem';
import BoxItem from '@components/Common/BoxItem';

function DJStation() {
  return (
    <Wrapper>
      <TopWrapper>
        <MagTopItem />
      </TopWrapper>
      <BoxItem />
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

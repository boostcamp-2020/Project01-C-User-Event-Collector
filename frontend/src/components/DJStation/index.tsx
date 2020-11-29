import React from 'react';
import styled from '@public/styles/themed-components';
import MagTopItem from '@components/Common/MagTopItem';
import BoxItem from '@components/Common/BoxItem';

function DJStation() {
  return (
    <Wrapper>
      <TopWrapper>
        <MagTopItem />
        <BoxItem />
      </TopWrapper>
    </Wrapper>
  );
}

const TopWrapper = styled.div`
  padding: 40px 120px;
  background-color: ${props => props.theme.color.lightgrey};
`;

const Wrapper = styled.div`
  background: gold;
`;

export default DJStation;

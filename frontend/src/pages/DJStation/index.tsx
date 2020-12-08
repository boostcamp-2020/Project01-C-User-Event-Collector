import React from 'react';
import styled from '@styles/themed-components';
import Content from '@components/Template/Content';

function DJStation() {
  return (
    <Content>
      <TopWrapper />
    </Content>
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

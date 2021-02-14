import React, { ReactElement } from 'react';
import styled from '@styles/themed-components';

interface IContent {
  children: any;
}

function Content({ children }: IContent): ReactElement {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  position: relative;
  max-width: 964px;
  margin: auto;
`;

export default Content;

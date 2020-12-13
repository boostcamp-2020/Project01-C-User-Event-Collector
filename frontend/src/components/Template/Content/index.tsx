import React, { ReactElement } from 'react';
import styled from '@styles/themed-components';

interface IContent {
  children: any;
}

// title이라고 하면 _document랑 충돌남
function Content({ children }: IContent): ReactElement {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  position: relative;
  max-width: ${props => props.theme.size.mainContentWidth};
  margin: auto;
`;

export default Content;

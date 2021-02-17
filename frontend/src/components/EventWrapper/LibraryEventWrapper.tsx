import React from 'react';
import styled from 'styled-components';
import useEventHandler from '@utils/logEventHandler';

interface ILibraryEventProps {
  type: string;
  action: string;
  id: number;
  children?: any;
}

interface IEventTargetProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function ClickEventWrapper({ type, action, id, children }: ILibraryEventProps) {
  const logData = {
    eventName: 'library_event',
    parameters: { action, type, id },
  };

  return <Wrapper onClick={useEventHandler(null, logData)}>{children}</Wrapper>;
}

const Wrapper = styled.div<IEventTargetProps>`
  width: 100%;
  cursor: pointer;
`;

export default ClickEventWrapper;

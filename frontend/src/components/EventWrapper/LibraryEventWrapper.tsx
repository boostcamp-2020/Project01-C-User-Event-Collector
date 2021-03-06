import React from 'react';
import styled from 'styled-components';
import logEventHandler from '@utils/logEventHandler';

interface ILibraryEventLog {
  eventName: string;
  parameters: {
    action: string;
    type: string;
    id: number;
  };
}

interface ILibraryEventProps {
  type: string;
  action: string;
  id: number;
  children?: any;
}

interface IEventTargetProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function LibraryEventWrapper({ type, action, id, children }: ILibraryEventProps) {
  const logData: ILibraryEventLog = {
    eventName: 'library_event',
    parameters: { action, type, id },
  };

  return <Wrapper onClick={logEventHandler(null, logData)}>{children}</Wrapper>;
}

const Wrapper = styled.div<IEventTargetProps>`
  width: 100%;
  cursor: pointer;
`;

export default LibraryEventWrapper;

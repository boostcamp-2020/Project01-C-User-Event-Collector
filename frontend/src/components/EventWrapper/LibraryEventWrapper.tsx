import React from 'react';
import styled from 'styled-components';
import useEventHandler from '@hooks/useEventHandler';

// type EventType = 'move' | 'click' | 'library' | 'login' | 'logout' | 'logout' | 'music' | 'error';
// type ActionType =
//   | 'like'
//   | 'remove'
//   | 'prev'
//   | 'next'
//   | 'shuffle_on'
//   | 'shuffle_off'
//   | 'play'
//   | 'pause'
//   | 'repeat_on'
//   | 'repeat_off';

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

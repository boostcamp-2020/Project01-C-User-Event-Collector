import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import api from '@api/index';

interface IClickEventLog {
  eventName: string;
  parameters: {
    page: string;
    target: string;
  };
}

interface IClickEventProps {
  target: string;
  id?: number | null;
  children?: any;
}

interface IEventTargetProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function ClickEventWrapper({ target, id, children }: IClickEventProps) {
  const router = useRouter();

  const logData: IClickEventLog = {
    eventName: 'click_event',
    parameters: { page: router.asPath, target: id ? `${target}/${id}` : target },
  };

  const clickEventHandler = () => {
    api.post('/log', { ...logData, eventTime: new Date() });
  };

  return <Wrapper onClick={clickEventHandler}>{children}</Wrapper>;
}

const Wrapper = styled.div<IEventTargetProps>`
  width: 100%;
  cursor: pointer;
`;

export default ClickEventWrapper;

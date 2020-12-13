import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import useEventHandler from '@hooks/useEventHandler';
import Link from 'next/link';

interface IAProps {
  next: string;
  target: string;
  id?: number;
  children: any;
}

interface IEventTargetProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function A({ next, target, id, children }: IAProps) {
  const router = useRouter();
  return (
    <>
      <Link href={`/${next}/[id]`} as={`/${next}/${id}`}>
        <Wrapper
          onClick={useEventHandler(null, {
            eventTime: new Date(),
            eventName: 'ClickEvent',
            parameters: {
              page: router.pathname,
              target: `/${`${target}/${id}`}`,
            },
          })}
        >
          {children}
        </Wrapper>
      </Link>
    </>
  );
}

const Wrapper = styled.div<IEventTargetProps>`
  width: 100%;
  cursor: pointer;
`;

export default A;

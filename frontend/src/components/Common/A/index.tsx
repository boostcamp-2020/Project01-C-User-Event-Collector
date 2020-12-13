import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import useEventHandler from '@hooks/useEventHandler';
import Link from 'next/link';

interface EventTargetProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function A({ next, target, id, children }) {
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

const Wrapper = styled.div<EventTargetProps>`
  width: 100%;
  cursor: pointer;
`;

export default A;

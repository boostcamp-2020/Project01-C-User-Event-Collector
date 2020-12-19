import React from 'react';
import Link from 'next/link';
import ClickEventWrapper from '@components/EventWrapper/ClickEventWrapper';

interface IAProps {
  next: string;
  target: string;
  id?: number;
  children: any;
}

function A({ next, target, id, children }: IAProps) {
  return (
    <>
      {id ? (
        <ClickEventWrapper target={target} id={id}>
          <Link href={`/${next}/[id]`} as={`/${next}/${id}`}>
            {children}
          </Link>
        </ClickEventWrapper>
      ) : (
        <ClickEventWrapper target={target}>
          <Link href={`/${next}`}>{children}</Link>
        </ClickEventWrapper>
      )}
    </>
  );
}

export default A;

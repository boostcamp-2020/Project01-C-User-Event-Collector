import React from 'react';
import styled from 'styled-components';

interface TrackItemProps {
  type: string;
  title: string;
  artists: string[];
  album: string;
  imgUrl: string;
}

function TrackItem({ type, title, artists, album, imgUrl }: TrackItemProps) {
  return (
    <Wrapper>
      <></>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  background-color: gold;
`;

export default TrackItem;

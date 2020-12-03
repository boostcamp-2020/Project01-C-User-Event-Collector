import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { HiHeart } from 'react-icons/hi';
import { BsMusicPlayer } from 'react-icons/bs';
import { RiPlayListLine } from 'react-icons/ri';
import axios from 'axios';

interface TrackItemProps {
  id?: number;
  type?: string;
  title?: string;
  artists?: any[];
  album?: string;
  imgUrl?: string;
}

const deleteTrackEvent = id => {
  console.log(id);
  axios.delete(`http://localhost:8000/api/library/tracks/${id}`).then(res => {
    console.log(res);
  });
};

function TrackItem({ id, type, title, artists, album, imgUrl }: TrackItemProps) {
  return (
    <Wrapper>
      <TrackWrapper style={{ width: '300px', justifyContent: 'flex-start', color: 'black' }}>
        {type === 'checkbox' ? <input type="checkbox" /> : null}
        <TrackImg src={imgUrl} alt="track-image" />
        <Text onClick={() => deleteTrackEvent(id)}>{title}</Text>
      </TrackWrapper>
      <TrackWrapper>
        {artists &&
          artists.map(artist => (
            <>
              <Link href="/artist/[id]" as={`/artist/${artist.id}`}>
                <Text>{artist.name}</Text>
              </Link>
            </>
          ))}
      </TrackWrapper>
      <TrackWrapper>
        <Text>{album}</Text>
      </TrackWrapper>
      <TrackWrapper style={{ width: '140px', color: 'grey' }}>
        <BsMusicPlayer size={20} />
        <RiPlayListLine size={20} />
        <HiHeart size={20} />
      </TrackWrapper>
    </Wrapper>
  );
}

const Text = styled.a`
  font-size: 0.8rem;
`;

const TrackImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 8px;
`;

const TrackWrapper = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 960px;
  height: 50px;
  padding: 18px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  color: ${props => props.theme.color.greyFontColor};
  &:hover {
    background: ${props => props.theme.color.lightgrey};
  }
`;

export default TrackItem;

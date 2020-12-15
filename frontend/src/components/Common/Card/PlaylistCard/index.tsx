import React from 'react';
import styled from '@styles/themed-components';
import BoxItem from '@components/Common/BoxItem';
import A from '@components/Common/A';

interface IPlaylistMetaProps {
  playlistMetaData: PlaylistMeta;
}

type PlaylistMeta = {
  id: number;
  name: string;
  date: string;
  tracks: trackMeta[];
};

type trackMeta = {
  id: number;
  name: string;
  date: string;
  imgUrl: string;
};

const PlaylistCard = ({ playlistMetaData: playlist }: IPlaylistMetaProps) => {
  const target = 'PlaylistCard';
  const imgUrlMetaData =
    'https://music-phinf.pstatic.net/20190927_157/1569572430647IAylm_PNG/VIBE_%B1%B9%B3%BB%B4%ED%BD%BA_%B7%CE%B8%C7%C6%BD%B4%ED%BD%BA.png';
  return (
    <Container>
      <BoxItem
        data={playlist}
        imgUrl={imgUrlMetaData}
        target={target}
        next="playlist"
        id={playlist.id}
      />
      <A next="playlist" target={target} id={playlist.id}>
        <PlaylistTitle>{playlist.name}</PlaylistTitle>
      </A>
      <TotalTrack>{`${playlist.tracks.length}곡`}</TotalTrack>
    </Container>
  );
};

const Container = styled.ul`
  width: ${props => props.theme.size.smallCarouselContentWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlaylistTitle = styled.a`
  ${props => props.theme.font.plain}
  display: block;
  font-size: 13px;
  padding-top: 14px;
`;

const TotalTrack = styled.a`
  ${props => props.theme.font.sub}
  display: inline-block;
  padding-top: 10px;
`;

export default PlaylistCard;

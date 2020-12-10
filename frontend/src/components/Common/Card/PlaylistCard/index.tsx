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
  return (
    <Container>
      <BoxItem imgUrl={`https://picsum.photos/${180}`} next="playlist" id={playlist.id} />
      <A next="playlist" id={playlist.id}>
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

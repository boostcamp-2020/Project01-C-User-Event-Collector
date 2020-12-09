import React from 'react';
import styled from '@styles/themed-components';
import BoxItem from '@components/Common/BoxItem';

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

const AlbumCard = ({ playlistMetaData: playlist }: IPlaylistMetaProps) => {
  return (
    <Container>
      <BoxItem imgUrl={`https://picsum.photos/${180}`} />
      <AlbumTitle>{playlist.name}</AlbumTitle>
      <TotalAlbumTrack>{`${playlist.tracks.length}곡`}</TotalAlbumTrack>
    </Container>
  );
};

const Container = styled.ul`
  width: ${props => props.theme.size.smallCarouselContentWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AlbumTitle = styled.a`
  ${props => props.theme.font.plain}
  display: block;
  font-size: 13px;
  padding-top: 14px;
`;

const TotalAlbumTrack = styled.a`
  ${props => props.theme.font.sub}
  display: inline-block;
  padding-top: 10px;
`;

export default AlbumCard;

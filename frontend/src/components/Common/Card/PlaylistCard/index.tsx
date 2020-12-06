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
      <CardContainer>
        <ImageContainer>
          <BoxItem imgUrl={`https://picsum.photos/${180}`} />
        </ImageContainer>
      </CardContainer>
      <AlbumTitle>{playlist.name}</AlbumTitle>
      <TotalAlbumTrack>{`${playlist.tracks.length}곡`}</TotalAlbumTrack>
    </Container>
  );
};

const Container = styled.ul`
  margin: 0 16px 16px 0;
  &:nth-child(5n) {
    margin-right: 0;
  }
`;

const CardContainer = styled.div``;

const ImageContainer = styled.a`
  position: relative;
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

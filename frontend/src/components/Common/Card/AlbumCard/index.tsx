import React from 'react';
import styled from '@styles/themed-components';
import BoxItem from '@components/Common/BoxItem';
import A from '@components/Common/A';

interface IAlbumMetaProps {
  albumMetaData: AlbumMeta;
}

type AlbumMeta = {
  id: number;
  name: string;
  date: string;
  imgUrl: string;
  artists?: artistMeta[];
  tracks: any[];
};

type artistMeta = {
  id?: number;
  name?: string;
  debut?: string;
  imgUrl?: string;
};

const AlbumCard = ({ albumMetaData: album }: IAlbumMetaProps) => {
  const target = 'AlbumCard';
  return (
    <Container>
      <BoxItem albumData={album} target={target} imgUrl={album.imgUrl} next="album" id={album.id} />
      <A next="album" target={target} id={album.id}>
        <AlbumTitle>{album?.name}</AlbumTitle>
      </A>
      {album.artists && album?.artists?.length > 3 ? (
        <AlbumArtistName>Various Artists</AlbumArtistName>
      ) : (
        album?.artists?.map(artist => (
          <A next="artist" target={target} id={artist.id} key={artist.id}>
            <AlbumArtistName>{artist.name}</AlbumArtistName>
          </A>
        ))
      )}
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

const AlbumArtistName = styled.a`
  ${props => props.theme.font.sub}
  display: inline-block;
  padding-top: 10px;
`;

export default AlbumCard;

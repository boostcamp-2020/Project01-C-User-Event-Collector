import React from 'react';
import styled from '@styles/themed-components';
import BoxItem from '@components/Common/BoxItem';

interface IAlbumMetaProps {
  albumMetaData: AlbumMeta;
}

type AlbumMeta = {
  id: number;
  name: string;
  date: string;
  imgUrl: string;
  artists: artistMeta[];
};

type artistMeta = {
  id: number;
  name: string;
  debut: string;
  imgUrl: string;
};

const AlbumCard = ({ albumMetaData }: IAlbumMetaProps) => {
  return (
    <Container>
      <BoxItem imgUrl={albumMetaData.imgUrl} />
      <AlbumTitle>{albumMetaData?.name}</AlbumTitle>
      {albumMetaData && albumMetaData.artists.length > 3 ? (
        <AlbumArtistName>Various Artists</AlbumArtistName>
      ) : (
        albumMetaData.artists.map(artist => (
          <AlbumArtistName key={artist.id}>{artist.name}</AlbumArtistName>
        ))
      )}
    </Container>
  );
};

const Container = styled.ul`
  width: ${props => props.theme.size.smallCarouselContentWidth};
  height: ${props => props.theme.size.smallCarouselContentWidth};
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

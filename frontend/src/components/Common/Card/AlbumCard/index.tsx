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
      <CardContainer>
        <BoxItem imgUrl={albumMetaData.imgUrl} />
      </CardContainer>
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
  margin: 0 16px 16px 0;
  &:nth-child(5n) {
    margin-right: 0;
  }
`;

const CardContainer = styled.div`
  width: ${props => props.theme.size.smallCarouselContentWidth};
  height: ${props => props.theme.size.smallCarouselContentWidth};
  position: relative;
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

import React from 'react';
import styled from '@styles/themed-components';
import DetailTemplate from '@components/Template/Detail';

interface IAlbumInfoProps {
  albumInfo?: MetaAlbum;
}

type MetaAlbum = {
  id: number;
  imgUrl: string;
  name: string;
  date: string;
  genres?: any[];
};

function AlbumDetail({ albumInfo: album }: IAlbumInfoProps) {
  return (
    <DetailTemplate type="album" metaData={album}>
      <Wrapper />
    </DetailTemplate>
  );
}

const Wrapper = styled.div`
  padding-bottom: 200px;
`;

export default AlbumDetail;

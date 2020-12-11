import React from 'react';
import styled from '@styles/themed-components';
import DetailTemplate from '@components/Template/Detail';
import unifyMetaData from '@utils/unifyMetaData';

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
    <DetailTemplate data={unifyMetaData('album', album)}>
      <Wrapper />
    </DetailTemplate>
  );
}

const Wrapper = styled.div`
  padding-bottom: 200px;
`;

export default AlbumDetail;

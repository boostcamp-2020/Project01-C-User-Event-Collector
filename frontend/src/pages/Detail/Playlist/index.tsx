import React from 'react';
import styled from '@styles/themed-components';
import DetailTemplate from '@components/Template/Detail';
import unifyMetaData from '@utils/unifyMetaData';

interface IPlaylistInfoProps {
  playlistInfo?: MetaPlaylist;
}

type MetaPlaylist = {
  id?: number;
};

function PlaylistDetail({ playlistInfo: playlist }: IPlaylistInfoProps) {
  return (
    <DetailTemplate data={unifyMetaData('playlist', playlist)}>
      <Wrapper />
    </DetailTemplate>
  );
}

const Wrapper = styled.div`
  padding-bottom: 50px;
`;

export default PlaylistDetail;

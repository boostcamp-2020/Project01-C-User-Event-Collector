import React from 'react';
import styled from '@styles/themed-components';
import DetailTemplate from '@components/Template/Detail';
import unifyMetaData from '@utils/unifyMetaData';

interface ITrackInfoProps {
  trackInfo?: MetaTrack;
}

type MetaTrack = {
  id: number;
  title: string;
  songwriter?: string;
  composer?: string;
  artists: any[];
  genres: any[];
  albums: any[];
  isLocal?: number | boolean;
};

function TrackDetail({ trackInfo: track }: ITrackInfoProps) {
  return (
    <DetailTemplate data={unifyMetaData('track', track)}>
      <Wrapper />
    </DetailTemplate>
  );
}

const Wrapper = styled.div`
  padding-bottom: 200px;
`;

export default TrackDetail;

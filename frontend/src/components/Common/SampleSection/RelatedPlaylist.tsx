import React from 'react';
import styled from '@styles/themed-components';
import useFetch from '@hooks/useFetch';
import Spinner from '@components/Common/Spinner';
import PlaylistCard from '@components/Common/Card/PlaylistCard';

function RelatedPlaylist() {
  console.log('relatedPlaylist ====');
  const { data, isLoading, isError } = useFetch(`/playlist`, null);
  if (isLoading) return <Spinner />;
  if (isError) {
    console.log(isError);
    return <div>...Error</div>;
  }
  const playlists = data.data;

  return (
    <SectionContentWrapper>
      {playlists &&
        playlists.splice(0, 3).map(playlist => (
          <PlaylistWrapper key={playlist.id}>
            <PlaylistCard playlistMetaData={playlist} />
          </PlaylistWrapper>
        ))}
    </SectionContentWrapper>
  );
}

const SectionContentWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
`;

const PlaylistWrapper = styled.div`
  text-align: left;
  margin-right: 20px;
`;

export default React.memo(RelatedPlaylist);

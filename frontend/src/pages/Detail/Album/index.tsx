import React from 'react';
import styled from '@styles/themed-components';
import DetailTemplate from '@components/Template/Detail';
import unifyMetaData from '@utils/unifyMetaData';
import Section from '@components/Common/Section';
import RelatedPlaylist from '@components/Common/SampleSection/RelatedPlaylist';
import RelatedArtist from '@components/Common/SampleSection/RelatedArtist';
import TrackItem from '@components/Common/TrackItem';

function AlbumDetail({ albumInfo: album }) {
  console.log(album);
  return (
    <DetailTemplate data={unifyMetaData('album', album)}>
      <Wrapper>
        <Section>
          <p className="section-title">앨범 수록곡</p>
          <SectionContentWrapper>
            {album?.tracks &&
              album?.tracks?.map(track => (
                <TrackItem key={track.id} trackMetaData={track} albumData={album} />
              ))}
          </SectionContentWrapper>
        </Section>
        <Section>
          <p className="section-title">비슷한 아티스트</p>
          <RelatedArtist />
        </Section>
        <Section>
          <p className="section-title">관련 플레이 리스트</p>
          <RelatedPlaylist />
        </Section>
      </Wrapper>
    </DetailTemplate>
  );
}

const Wrapper = styled.div`
  padding-bottom: 50px;
`;

const SectionContentWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
`;

export default AlbumDetail;

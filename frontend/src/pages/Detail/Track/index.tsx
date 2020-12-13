import React from 'react';
import styled from '@styles/themed-components';
import BoxItem from '@components/Common/BoxItem';
import DetailTemplate from '@components/Template/Detail';
import unifyMetaData from '@utils/unifyMetaData';
import Section from '@components/Common/Section';
import A from '@components/Common/A';
import RelatedPlaylist from '@components/Common/SampleSection/RelatedPlaylist';
import lyric from '../../../data/lyricSample';

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
  album: any;
  isLocal?: number | boolean;
};

function TrackDetail({ trackInfo: track }: ITrackInfoProps) {
  const TrackDetailAlbum = 'TrackDetailAlbum';

  return (
    <DetailTemplate data={unifyMetaData('track', track)}>
      <Wrapper>
        <Section>
          <p className="section-title">가사</p>
          <LyricWrapper>
            <Lyric>{lyric}</Lyric>
            <br />
            <Lyric>{lyric}</Lyric>
          </LyricWrapper>
        </Section>
        <Section>
          <p className="section-title">수록 앨범</p>
          <SectionContentWrapper>
            <ContentImgWrapper>
              <BoxItem
                target={TrackDetailAlbum}
                imgUrl={track?.album?.imgUrl}
                next="album"
                id={track?.album?.id}
              />
            </ContentImgWrapper>

            <ContentWrapper>
              <AlbumTag>최신앨범</AlbumTag>
              <A next="album" id={track?.album.id} target={TrackDetailAlbum}>
                <AlbumTitle>{track?.album.name}</AlbumTitle>
                <AlbumContent>{track?.artists[0]?.name}</AlbumContent>
                <AlbumContent>{track?.album.date}</AlbumContent>
              </A>
            </ContentWrapper>
          </SectionContentWrapper>
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

const Lyric = styled.div`
  ${props => props.theme.font.sub}
  line-height: 150%;
  width: 35%;
  margin-bottom: 10px;
  display: block;
`;

const LyricWrapper = styled.div`
  margin-top: 20px;
`;

const AlbumTag = styled.p`
  color: ${props => props.theme.color.highlight};
  font-size: 12px;
  margin-bottom: 8px;
`;

const ContentImgWrapper = styled.div`
  width: 180px;
  height: 180px;
`;

const AlbumTitle = styled.a`
  ${props => props.theme.font.plain}
  font-size: 16px;
`;

const AlbumContent = styled.p`
  ${props => props.theme.font.sub}
  margin-top : 6px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 24px;
  flex-direction: column;
`;

const PlaylistWrapper = styled.div`
  text-align: left;
  margin-right: 20px;
`;

export default TrackDetail;

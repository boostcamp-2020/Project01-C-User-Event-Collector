import React from 'react';
import styled from '@styles/themed-components';
import LargeButton from '@components/Common/Button/LargeButton';
import TrackList from '@components/TrackList';

interface IPlaylistInfoProps {
  playlistInfo?: MetaPlaylist;
}

type MetaPlaylist = {
  id: number;
  title: string;
  date: string;
  imgUrl: string;
  tag: string;
  content: string;
  tracks: any[];
};

function PlaylistDetail({ playlistInfo: playlist }) {
  console.log('+++++,  ', playlist);
  const description =
    '많은 음악가들이 크리스마스 시즌에 맞춰 겨울 분위기가 물씬 나는 곡들을 발표했다. 코로나바이러스의 여파로 인해 우울한 한 해이지만, 여러 아티스트가 들려주는 캐럴과 함께 잠시나마 세상을 잊고 즐거운 연휴를 기약해 보자. - 힙합엘이';
  const imgUrlMetaData =
    'https://music-phinf.pstatic.net/20190927_157/1569572430647IAylm_PNG/VIBE_%B1%B9%B3%BB%B4%ED%BD%BA_%B7%CE%B8%C7%C6%BD%B4%ED%BD%BA.png';

  return (
    <Container>
      <Header>
        <HeaderImg src={imgUrlMetaData} alt="detail-header-img" />
        <HeaderContent>
          <MainTitle>{playlist.name}</MainTitle>
          <SubTitle>VIBE</SubTitle>
          <SubContent>{description}</SubContent>
          <ButtonsWrapper>
            <LargeButton customType="play" />
            <LargeButton customType="shuffle" />
            <LargeButton customType="mp3" />
          </ButtonsWrapper>
        </HeaderContent>
      </Header>
      <Wrapper>
        <AddPlayListButtonWrapper>
          <LargeButton customType="addToFirst" />
          <LargeButton customType="addToLast" />
        </AddPlayListButtonWrapper>
        <TrackList trackList={playlist.tracks} />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 41px;
  margin: auto;
  position: relative;
  max-width: ${props => props.theme.size.mainContentWidth};
  margin: auto;
`;

const HeaderImg = styled.img`
  width: 195px;
  height: 195px;
`;

const Header = styled.header`
  position: relative;
  padding: 20px 0 50px 0;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  justify-content: space-between;
`;

const HeaderContent = styled.div`
  position: relative;
  width: 750px;
  display: flex;
  flex-direction: column;

  margin-left: 2rem;
`;

const MainTitle = styled.span`
  display: block;
  ${props => props.theme.font.boldTitle}
`;

const SubTitle = styled.span`
  ${props => props.theme.font.plain}
  font-size: 15px;
  padding: 10px 0;
`;

const SubContent = styled.span`
  ${props => props.theme.font.sub}
  padding-bottom: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  button {
    margin-right: 10px;
  }
`;

const Wrapper = styled.div`
  padding-top: 34px;
  padding-bottom: 50px;
`;

const AddPlayListButtonWrapper = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export default PlaylistDetail;

import React, { ReactElement } from 'react';
import styled from '@styles/themed-components';

import LargeButton from '@components/Common/Button/LargeButton';

interface ILayout {
  type?: string;
  metaData?: any;
  children: any;
}

const customMetaData = (type, metaData) => {
  const result = {
    title: null,
    date: null,
    genre: null,
    artist: null,
    composer: null,
    songwriter: null,
    imgUrl: null,
  };
  switch (type) {
    case 'artist':
      result.title = metaData.name;
      result.date = metaData.debut.split('T')[0];
      result.genre = metaData.genres[0].name;
      result.imgUrl = metaData.imgUrl;
      return result;
    case 'track':
      result.title = metaData.title;
      result.date = metaData.album.date;
      result.artist = metaData.artists[0].name;
      result.songwriter = metaData.songwriter;
      result.composer = metaData.composer;
      result.imgUrl = metaData.album.imgUrl;
      return result;
    case 'album':
      result.title = metaData.name;
      result.artist = metaData.artists.join(', ');
      result.date = metaData.date;
      result.genre = metaData.genres[0].name;
      result.imgUrl = metaData.imgUrl;
      return result;
    case 'playlist':
      result.title = metaData.name;
      return result;
    default:
      return result;
  }
};

const testImgUrl =
  'https://musicmeta-phinf.pstatic.net/album/004/535/4535859.jpg?type=r480Fll&v=20200429115934';

// title이라고 하면 _document랑 충돌남
function Layout({ type, metaData, children }: ILayout): ReactElement {
  const data = customMetaData(type, metaData);
  return (
    <Wrapper>
      <Header>
        <HeaderImg src={data.imgUrl} />
        <HeaderContent>
          <MainTitle>{data.title}</MainTitle>
          {type === 'artist' && <SubTitle>{`${data.date} 데뷔 · ${data.genre}`}</SubTitle>}
          {(type === 'track' || type === 'album') && <SubTitle>{data.artist}</SubTitle>}
          {type === 'album' && <SubContent>{`${data.date} · ${data.genre}`}</SubContent>}
          {type === 'track' && <SubContent>{`작사 ${data.songwriter}`}</SubContent>}
          {type === 'track' && <SubContent>{`작곡 ${data.composer}`}</SubContent>}
          <ButtonsWrapper>
            <LargeButton customType="play" />
            <LargeButton customType="shuffle" />
            <LargeButton customType="mp3" />
          </ButtonsWrapper>
        </HeaderContent>
      </Header>
      <DetailContent>{children}</DetailContent>
    </Wrapper>
  );
}

const HeaderImg = styled.img`
  width: 195px;
  height: 195px;
`;

const Wrapper = styled.div`
  width: 100%;
  padding-top: 41px;
  padding-bottom: 23px;
  margin: auto;
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
`;

const MainTitle = styled.span`
  display: block;
  padding-top: 8px;
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

const DetailContent = styled.div`
  padding-top: 34px;
`;

export default Layout;

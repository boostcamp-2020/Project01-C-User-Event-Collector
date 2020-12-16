import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@styles/themed-components';
import Carousel from '@components/Common/Carousel';
import Section from '@components/Common/Section';
import MagCard from '@components/Common/Card/MagCard';
import MagTopItem from '@components/Common/MagTopItem';
import PlaylistCard from '@components/Common/Card/PlaylistCard';
import useEventHandler from '@hooks/useEventHandler';

function Today({ magList, playlistList }) {
  const router = useRouter();
  const randomNum = Math.floor(Math.random() * 2);
  const [isBannerOpened, setIsBannerOpened] = useState(randomNum === 1);

  const customClickLogData = target => {
    return {
      eventTime: new Date(),
      eventName: 'click_event',
      parameters: { page: router.asPath },
      target,
    };
  };

  const bannerClickEvent = e => {
    if (e.target.className.includes('banner-close-button')) {
      console.log('hello');
      useEventHandler(setIsBannerOpened(false), customClickLogData('BannerCloseBtn'));
    }
    useEventHandler(setIsBannerOpened(false), customClickLogData('BannerBtn'));
  };

  return (
    <Wrapper>
      {isBannerOpened && (
        <BannerImgWrapper onClick={bannerClickEvent}>
          <BannerCloseButton className="banner-close-button" />
          <BannerImg src="/images/banner-ad-img.png" alt="banner-ad-img" />
        </BannerImgWrapper>
      )}
      <MagTopWrapper>
        <MagTopItem magData={magList[0]} />
      </MagTopWrapper>
      <Content>
        <Section>
          <a className="section-title">매거진</a>
          <Carousel groupSize={3}>
            {magList &&
              magList.slice(1).map((mag, i) => <MagCard key={mag.id} magMetaData={mag} />)}
          </Carousel>
        </Section>

        <Section>
          <p className="section-title">내 취향 플레이리스트</p>
          <Carousel groupSize={5}>
            {playlistList &&
              playlistList?.map(playlist => (
                <PlaylistCard key={playlist.id} playlistMetaData={playlist} />
              ))}
          </Carousel>
        </Section>
      </Content>
    </Wrapper>
  );
}

const MagTopWrapper = styled.div`
  width: 100%;
  padding: 40px 0;
  margin-bottom: 16px;
  background: ${props => props.theme.color.lightgrey};
`;

const Content = styled.div`
  position: relative;
  max-width: ${props => props.theme.size.mainContentWidth};
  margin: auto;
`;

const BannerImgWrapper = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  &: hover {
    cursor: pointer;
  }
`;

const BannerCloseButton = styled.button`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 24px;
  height: 24px;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div``;

export default Today;

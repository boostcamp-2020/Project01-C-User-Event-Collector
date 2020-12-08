import React from 'react';
import styled from '@styles/themed-components';
import Carousel from '@components/Common/Carousel';
import Section from '@components/Common/Section';
import MagCard from '@components/Common/Card/MagCard';
import MagTopItem from '@components/Common/MagTopItem';
import PlaylistCard from '@components/Common/Card/PlaylistCard';
import { GrNext } from 'react-icons/gr';
import useFetch from '../../hooks/useFetch';

function Today({ magList, playlistList }) {
  console.log('###', playlistList);
  return (
    <Wrapper>
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
          <a className="section-title">내 취향 플레이리스트</a>
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

const Wrapper = styled.div``;

export default Today;

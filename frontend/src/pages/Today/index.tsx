import React from 'react';
import styled from '@styles/themed-components';
import Carousel from '@components/Common/Carousel';
import Section from '@components/Common/Section';
import MagCard from '@components/Common/Card/MagCard';
import MagTopItem from '@components/Common/MagTopItem';

function Today({ magList }) {
  return (
    <Wrapper>
      <Black>
        <MagTopItem />
      </Black>
      <Content>
        <Section>
          <a className="section-title">매거진</a>
          <Carousel groupSize={3}>
            {magList && magList.map(mag => <MagCard key={mag.id} magMetaData={mag} />)}
          </Carousel>
        </Section>

        <Section>
          <a className="section-title">매거진</a>
          <Carousel groupSize={3}>
            {magList && magList.map(mag => <MagCard key={mag.id} magMetaData={mag} />)}
          </Carousel>
        </Section>

        <Section>
          <a className="section-title">매거진</a>
          <Carousel groupSize={3}>
            {magList && magList.map(mag => <MagCard key={mag.id} magMetaData={mag} />)}
          </Carousel>
        </Section>
      </Content>
    </Wrapper>
  );
}

const Black = styled.div`
  width: 100%;
  padding: 40px 0;
  background: black;
`;

const Content = styled.div`
  position: relative;
  max-width: ${props => props.theme.size.mainContentWidth};
  margin: auto;
`;

const Wrapper = styled.div``;

export default Today;

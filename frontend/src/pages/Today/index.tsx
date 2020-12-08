import React from 'react';
import styled from '@styles/themed-components';
import Carousel from '@components/Common/Carousel';
import Section from '@components/Common/Section';
import MagCard from '@components/Common/Card/MagCard';

function Today({ magList }) {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

const CarouselItemWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  padding-bottom: 200px;
`;

export default Today;

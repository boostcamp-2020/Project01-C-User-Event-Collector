import React from 'react';
import styled from '@styles/themed-components';

import TrackItem from '@components/Common/TrackItem';

const MagLargeCard = () => {
  const title = '계절의 온도를 전하는, 백예린 <tellusboutyourself>';
  const titleImage = 'https://music-phinf.pstatic.net/20201214_283/1607916262189aCG4U_JPEG/1_%B9%E9%BF%B9%B8%B0.jpeg';
  const discription = '2019년에 발매했던 <Every letter I sent you.>보다는 줄어든 부피이지만, 이번에도 무려 14곡이다. 14곡은 어떤 장르를 흡수했건 간에 댄서블한 느낌을 선사하고, 끝까지 백예린의 섬세한 디렉팅을 하나하나 거쳐 만들어진 덕분에 탄탄한 완성도를 자랑한다. 한 평론가는 “(지난 앨범들에 비해) 굴곡이 명확해졌다”라고 표현하는데, 그 말처럼 백예린의 앨범은 그가 원했던 대로 속도와 온도를 조절하며 청자의 감정을 조율하고 있다는 인상을 준다. <tellusboutyourself>라는 제목에서 풍기는 트렌디함이 14곡이 지닌 매력은 하나하나 곱씹어 볼 필요가 있다. 흉내만 낸 것이 아닌, 재능이 넘치는 아티스트가 구현해낸 ‘진짜’ 트렌드는 다르다.';

  const track = {
    album: {
      date: "2020-07-19T15:00:00.000Z",
      id: 4686872,
      imgUrl: "https://musicmeta-phinf.pstatic.net/album/004/686/4686872.jpg?type=r360Fll&v=20200720175905",
      name: "취기를 빌려 (취향저격 그녀 X 산들)",
    },
    artists: [{ id: 155423, name: "산들", debut: "2011-04-20T15:00:00.000Z", imgUrl: "https://musicmeta-phinf.pstatic.net/artist/000/155/155423.jpg?type=ff300_300&v=20201109164612" }],
    composer: "새봄(Saevom)",
    id: 41051447,
    isLocal: true,
    songwriter: "새봄(Saevom)",
    title: "취기를 빌려 (취향저격 그녀 X 산들)",
    imgUrl: "https://musicmeta-phinf.pstatic.net/album/004/686/4686872.jpg?type=r360Fll&v=20200720175905",
  }

  return (
    <Container>
      <Title>{title}</Title>
      <ImageContainer src={titleImage} />
      <Discription>{discription}</Discription>
      <TrackItem
        key={track.id}
        trackMetaData={track}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  padding: 1rem 0;
`;

const ImageContainer = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
`;

const Discription = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #333;
  line-height: 1.8rem;
  padding: 1rem 0;
`;

export default MagLargeCard;

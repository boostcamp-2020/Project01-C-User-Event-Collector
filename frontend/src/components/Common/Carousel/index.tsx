import Carousel from 'react-bootstrap/Carousel';
import styled from '@styles/themed-components';

interface CarouselWrapperProps {
  groupSize?: number;
}

const MyCarousel = ({ children, groupSize }) => {
  const rows = children
    .map(card => <>{card}</>)
    .reduce((r, element, index) => {
      index % groupSize === 0 && r.push([]);
      r[r.length - 1].push(element);
      return r;
    }, [])
    .map(rowContent => (
      <Carousel.Item key={rowContent.id}>
        <ContentWrapper className="carousel-content-wrapper" groupSize={groupSize}>
          {rowContent}
        </ContentWrapper>
      </Carousel.Item>
    ));
  return (
    <Wrapper>
      <Carousel interval={null} keyboard={false}>
        {rows}
      </Carousel>
    </Wrapper>
  );
};

const ContentWrapper = styled.div<CarouselWrapperProps>`
  width: 100%;
  padding: 20px 0;
  display: grid;
  grid-template-columns: ${props =>
    props.groupSize === 3 ? 'repeat(3, 295px)' : 'repeat(5, 180px)'};
  grid-column-gap: 30px;
`;

const Wrapper = styled.div`
  .carousel-inner {
    overflow: visible;
  }
  .carousel-control-prev,
  .carousel-control-next {
    background: white;
    box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.1);
    width: 40px;
    height: 40px;
    position: absolute;
    top: 35%;
    border-radius: 50%;
    opacity: 100%;
  }
  .carousel-control-prev {
    left: -20px;
  }
  .carousel-control-next {
    right: -20px;
  }
  .carousel-control-prev-icon {
    background-image: url('https://icons-for-free.com/iconfiles/png/64/next+icon-1320085938867901461.png');
    transform: rotate(180deg);
  }
  .carousel-control-next-icon {
    background-image: url('https://icons-for-free.com/iconfiles/png/64/next+icon-1320085938867901461.png');
  }
  .carousel-indicators {
    display: none;
  }
`;

export default MyCarousel;

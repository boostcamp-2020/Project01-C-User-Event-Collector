/**
 * non-반응형 sample 컴포넌트
 */
import styled from '@styles/themed-components';

interface Props {
  text: string;
}

const Test = ({ text }: Props) => (
  <StyledP>
    <Container>
      {text}
      🦄🐔
    </Container>
    <Container>{text}</Container>
  </StyledP>
);

const StyledP = styled.p`
  color: ${props => props.theme.color.blue};
  font-size: 10rem;
`;

const Container = styled.div`
  padding: 5rem;
`;

export default Test;

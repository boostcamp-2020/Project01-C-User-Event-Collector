/**
 * 반응형 sample 컴포넌트
 */
import styled, { withProps } from '@styles/themed-components';

interface Sample {
  visible: string;
}

const SampleWithProps = withProps<Sample, HTMLSpanElement>(styled.span)`
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`;

interface Props {
  text?: string;
}

const Test = ({ text }: Props) => (
  <>
    <StyledP>
      <SampleWithProps visible>
        {text}
        🦄🐔
      </SampleWithProps>
      <SampleWithProps visible={false}>{text}</SampleWithProps>
    </StyledP>
  </>
);

const StyledP = styled.p`
  ${props => props.theme.media.tablet`
    color: black;
    font-size: 5rem;
  `}
  color: ${props => props.theme.color.pink};
  font-size: 2rem;
`;

export default Test;

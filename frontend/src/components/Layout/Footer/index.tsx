import styled from '@styles/themed-components';

function Footer() {
  return <Container>footer</Container>;
}
const Container = styled.footer`
  width: 100%;
  padding-left: ${props => props.theme.size.sidebarWidth};
  padding-bottom: 200px;
  background-color: ${props => props.theme.color.lightgrey};
`;

export default Footer;

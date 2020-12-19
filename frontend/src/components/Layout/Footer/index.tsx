import styled from '@styles/themed-components';

function Footer() {
  return (
    <Container>
      <FooterContent>
        <NoticeWrapper>
          <SpanTitle>공지사항</SpanTitle>
{' '}
          <SpanContent>
            <a href="https://www.notion.so/01-C-2eff1e17f05a48cab0eeb5bea98a055e">
              User-Event-Collector C-team Notion 바로가기
            </a>
          </SpanContent>
        </NoticeWrapper>
        <InfoWrapper>
          <Info>
            <SpanTitle>프로젝트</SpanTitle> 
{' '}
<SpanContent>미니 바이브</SpanContent>
          </Info>
          <Info>
            <SpanTitle>소속</SpanTitle> 
{' '}
<SpanContent>네이버 커넥트 Boost camp 5th</SpanContent>
          </Info>
          <Info>
            <SpanTitle>팀 이름</SpanTitle> 
{' '}
<SpanContent>이줍사 (이벤트를 줍는 사람들)</SpanContent>
          </Info>
          <Info>
            <SpanTitle>깃 저장소</SpanTitle>
{' '}
            <SpanContent>
              <a href="https://github.com/boostcamp-2020/Project01-C-User-Event-Collector">
                https://github.com/boostcamp-2020/Project01-C-User-Event-Collector
              </a>
            </SpanContent>
          </Info>
        </InfoWrapper>
      </FooterContent>
    </Container>
  );
}
const Container = styled.footer`
  position: absolute;
  width: 100%;
  right: 0;
  bottom: 81px;
  padding-left: ${props => props.theme.size.sidebarWidth};
  padding-bottom: 3rem;
  background-color: ${props => props.theme.color.lightgrey};
`;

const FooterContent = styled.div`
  font-size: 13px;
  color: #666;
`;

const NoticeWrapper = styled.div`
  padding: 1.2rem;
  border: 1px solid rgba(30, 30, 30, 0.05);
`;

const SpanTitle = styled.span`
  color: #aaa;
  font-weight: 500;
  padding-right: 3px;
`;

const SpanContent = styled.span``;

const InfoWrapper = styled.div`
  padding: 1.2rem;
  border-bottom: 1px solid rgba(30, 30, 30, 0.05);
`;

const Info = styled.div`
  padding: 0.3rem 0;
`;

export default Footer;

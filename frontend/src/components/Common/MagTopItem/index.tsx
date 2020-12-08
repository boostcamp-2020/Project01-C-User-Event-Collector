import React from 'react';
import styled from 'styled-components';

const testUrl =
  'https://music-phinf.pstatic.net/20201204_48/1607059391554q6R0k_JPEG/1204_mushvenom_magazine_cover.jpg?type=w720';

function MagTopItem() {
  return (
    <Wrapper>
      <MagImg src={testUrl} alt="mag-top-img" />
      <MagContent>
        <h1>안녕하세요ㅠㅠㅎㄴ란ㅇㄹ</h1>
        <h3>안녕하세요ㅠㅠㅎㄴ란ㅇㄹ</h3>
        <p>안녕하세요ㅠㅠㅎㄴ란ㅇㄹ</p>
      </MagContent>
    </Wrapper>
  );
}

const MagImg = styled.img`
  height: ${props => props.theme.size.magTopItemHeight};
  display: flex;
`;

const MagContent = styled.div`
  background: gold;
  width: 100%;
  padding: 40px;
`;

const Wrapper = styled.div`
  width: ${props => props.theme.size.mainContentWidth};
  margin: 0 auto;
  height: ${props => props.theme.size.magTopItemHeight};
  background-color: white;
  display: flex;
`;

export default MagTopItem;

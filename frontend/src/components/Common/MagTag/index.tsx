import React from 'react';
import styled from 'styled-components';

function MagTag({ type }) {
  switch (type) {
    case 'special':
      return (
        <SpecialTag>
          <TagText>SPECIAL</TagText>
        </SpecialTag>
      );
    case 'pick':
      return (
        <PickTag>
          <TagText>PICK</TagText>
        </PickTag>
      );
    case 'genre':
      return (
        <GenreTag>
          <TagText>GENRE</TagText>
        </GenreTag>
      );
    default:
      return (
        <All>
          <TagText>전체</TagText>
        </All>
      );
  }
}

const TagText = styled.span`
  font-size: 13px;
  font-weight: 600;
  font-style: italic;
  position: relative;
  bottom: 1px;
  color: ${props => props.theme.color.white};
`;

const All = styled.a`
  padding: 5px 16px;
  border-radius: 30px;
  background: ${props => props.theme.color.highlight};
`;

const SpecialTag = styled.a`
  padding: 5px 16px;
  border-radius: 30px;
  background: linear-gradient(to right, red, #ff00a0, #7e00e4);
`;

const PickTag = styled.a`
  padding: 5px 16px;
  border-radius: 30px;
  background: ${props => props.theme.color.highlight};
`;

const GenreTag = styled.a`
  padding: 5px 16px;
  border-radius: 30px;
  background: #7e00e4;
`;

export default MagTag;

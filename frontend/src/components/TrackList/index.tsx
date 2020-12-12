import { useState } from 'react';
import styled from '@styles/themed-components';

import TrackItem from '@components/Common/TrackItem';

const TrackList = ({ trackList }) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(new Array());

  const onChangeAll = (e) => {
    if (e.target.checked) {
      const list = trackList.map(track => track.id);
      setSelected([...list]);
      setVisible(true);
    } else {
      setSelected([]);
      setVisible(false);
    }
  }

  const onChangeHandle = (e) => {
    if (e.target.checked) {
      setSelected([...selected, +e.target.value]);
      setVisible(true);
    } else {
      const result = selected.filter((o) => o != e.target.value);
      if(!result.length) setVisible(false);
      setSelected(result);
    }
  }

  return (
    <TrackListSection>
      {trackList.map(track => (
        <TrackItem key={track.id} type="checkbox" trackMetaData={track} selected={selected} onSelectHandler={onChangeHandle} />
      ))}
      <SelectedHeader displayVisiable={visible}>
        <SelectedBarInner>
          <SelectedInfoArea>
            <input type={'checkbox'} onChange={onChangeAll} checked={selected.length === trackList.length ? true : false}/>
            <SelectLabel>전체선택</SelectLabel>
            <SelectedCountSpan>{selected.length}곡 선택</SelectedCountSpan>
          </SelectedInfoArea>
          <PlayOptionArea>

          </PlayOptionArea>
        </SelectedBarInner>
      </SelectedHeader>
    </TrackListSection>
  );
};

const TrackListSection = styled.div`
`;

const SelectedHeader = styled.div<{ displayVisiable: Boolean }>`
  display: ${props => props.displayVisiable ? 'block' : 'none'};
  position: fixed;
  top: 0;
  right: 0;
  left: 225px;
  z-index: 40;
  border-bottom: 1px solid #e4e4e4;
  background-color: #f2f2f2;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.07);
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.07);
`;

const SelectedBarInner = styled.div`
  position: relative;
  width: 964px;
  margin: 0 auto;
`;

const SelectedInfoArea = styled.div`
  padding: 19px 0 20px;
  border-bottom: 1px solid #e4e4e4;
`;

const SelectLabel = styled.label`
  font-size: 15px;
  padding: 0 6px
`;

const SelectedCountSpan = styled.span`
  font-weight: 700;
  color: #ff1150;
`;

const PlayOptionArea = styled.div`
  position: relative;
  margin-left: -10px;
  padding: 13px 0 12px;
`;

export default TrackList;

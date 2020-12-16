import { useState } from 'react';
import styled from '@styles/themed-components';

import { RiOrderPlayFill, RiPlayListAddLine } from 'react-icons/ri';
import { IoCloseOutline } from 'react-icons/io5';

import TrackItem from '@components/Common/TrackItem';
import LargeButton from '@components/Common/Button/LargeButton';

const TrackList = ({ type, trackList }) => {
  const initialSelector: number[] = [];
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(initialSelector);

  const onChangeAll = e => {
    if (e.target.checked) {
      const list = trackList.map(track => track.id);
      setSelected([...list]);
      setVisible(true);
    } else {
      setSelected([]);
      setVisible(false);
    }
  };

  const onChangeHandle = e => {
    if (e.target.checked) {
      setSelected([...selected, +e.target.value]);
      setVisible(true);
    } else {
      const result = selected.filter(o => o !== +e.target.value);
      if (!result.length) setVisible(false);
      setSelected(result);
    }
  };

  const onCloseHandle = e => {
    setVisible(false);
  };

  return (
    <>
      {trackList ? (
        <TrackListSection>
          {trackList.map((track, index) => (
            type ?
              (<TrackItem
                key={track.id}
                trackMetaData={track}
                selected={selected}
                onSelectHandler={onChangeHandle}
              />) :
              (<TrackItem
                key={track.id}
                type="checkbox"
                trackMetaData={track}
                selected={selected}
                onSelectHandler={onChangeHandle}
                chart={index + 1}
              />)
          ))}
          <SelectedHeader displayVisiable={visible}>
            <SelectedBarInner>
              <SelectedInfoArea>
                <InfoAreaWrapper>
                  <input
                    type="checkbox"
                    onChange={onChangeAll}
                    checked={selected.length === trackList.length}
                  />
                  <SelectLabel>전체선택</SelectLabel>
                  <SelectedCountSpan> {selected.length}곡 선택</SelectedCountSpan>
                </InfoAreaWrapper>
                <IoCloseOutline size={26} onClick={onCloseHandle} />
              </SelectedInfoArea>
              <PlayOptionArea>
                <InfoAreaWrapper>
                  <TextButton>
                    <RiOrderPlayFill />
                    <WordSpan>바로 다음에</WordSpan>
                  </TextButton>
                  <TextButton>
                    <RiPlayListAddLine />
                    <WordSpan>맨 아래에</WordSpan>
                  </TextButton>
                  <TextButton>
                    <span>mp3 구매</span>
                  </TextButton>
                </InfoAreaWrapper>
                <LargeButton customType="normal-play" />
              </PlayOptionArea>
            </SelectedBarInner>
          </SelectedHeader>
        </TrackListSection>
      ) : null}
    </>
  );
};

const TextButton = styled.span`
  all: unset;
  cursor: pointer;

  display: flex;
  align-items: center;

  font-size: 14px;
  margin: 6px;
`;

const WordSpan = styled.span`
  padding-left: 5px;
`;

const TrackListSection = styled.div``;

const SelectedHeader = styled.div<{ displayVisiable: boolean }>`
  display: ${props => (props.displayVisiable ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  left: 225px;
  z-index: 40;
  border-bottom: 1px solid #e4e4e4;
  background-color: #f2f2f2;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07);
`;

const SelectedBarInner = styled.div`
  position: relative;
  width: 964px;
  margin: 0 auto;
`;

const SelectedInfoArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 19px 0 20px;
  border-bottom: 1px solid #e4e4e4;
`;

const InfoAreaWrapper = styled.div`
  display: flex;

  align-items: center;
`;

const SelectLabel = styled.label`
  font-size: 15px;
  padding: 0 6px;
`;

const SelectedCountSpan = styled.span`
  font-weight: 700;
  color: #ff1150;
`;

const PlayOptionArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  margin-left: -10px;
  padding: 13px 0 12px;
`;

export default TrackList;

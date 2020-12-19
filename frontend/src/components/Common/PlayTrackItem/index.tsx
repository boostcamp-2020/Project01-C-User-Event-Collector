import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { RiPlayListLine } from 'react-icons/ri';
import { BsThreeDots } from 'react-icons/bs';
import useEventHandler from '@hooks/useEventHandler';

import api from '@api/index';
import { useAuthState, useAuthDispatch } from '@context/AuthContext';
import BoxDropdown from '@components/Common/Dropdown/BoxDropdown';
import A from '@components/Common/A';

function PlayTrackItem({ type, trackData: track }) {
  const state = useAuthState();
  const router = useRouter();
  const dispatch = useAuthDispatch();
  const { trackList } = state;
  const target = 'PlayTrackItem';

  const addTrackEvent = () => {
    api.post(`library/tracks`, { trackId: track.id });
    dispatch({ type: 'ADD_TRACK', trackId: track.id });
  };
  const deleteTrackEvent = () => {
    api.delete(`library/tracks/${track.id}`);
    dispatch({ type: 'DELETE_TRACK', trackId: track.id });
  };

  const libraryEventLog = action => {
    return {
      eventName: 'music_event',
      parameters: { type: 'track', action, page: router.asPath },
    };
  };

  return (
    <TrackWrapper>
      <TrackImgWrapper>
        <A next="album" id={track?.album?.id} target={target}>
          <TrackImg src={track?.album?.imgUrl} alt="playbar-track-img" />
        </A>
      </TrackImgWrapper>
      <TrackContentWrapper>
        <A next="track" id={track?.id} target={target}>
          <TrackTitle type={type}>{track?.title}</TrackTitle>
        </A>
        {track?.artists && (
          <A next="artist" id={track?.artists[0]?.id} target={target}>
            <TrackArtist>{track?.artists[0]?.name}</TrackArtist>
          </A>
        )}
      </TrackContentWrapper>
      <IconWrapper>
        {type !== 'playbar' && (
          <>
            {trackList?.includes(track?.id) ? (
              <IoMdHeart
                className="like button"
                size={24}
                color="ff1350"
                onClick={useEventHandler(deleteTrackEvent, libraryEventLog('remove'))}
              />
            ) : (
              <IoMdHeartEmpty
                className="like button"
                size={24}
                onClick={useEventHandler(addTrackEvent, libraryEventLog('like'))}
              />
            )}

            <RiPlayListLine className="lyric button" size={20} />
            <BsThreeDots className="dropdown button" size={20} />
            <DropdownWrapper>
              <BoxDropdown trackData={track} type="track" id={track?.id} />
            </DropdownWrapper>
          </>
        )}
      </IconWrapper>
    </TrackWrapper>
  );
}

const DropdownWrapper = styled.div`
  position: absolute;
  right: -10px;
  height: 25px;
  width: 22px;
  color: transparent;
`;

const TrackImgWrapper = styled.a``;

const TrackImg = styled.img`
  width: 45px;
  height: 45px;
`;

const TrackContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
`;

const TrackTitle = styled.a<{ type?: string }>`
  font-weight: ${props => (props.type ? 400 : 600)};
  font-size: 14px;
  color: ${props => (props.type ? '#c9c9c9' : props.theme.color.white)};
  width: 125px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
`;

const TrackArtist = styled.a`
  font-size: 12px;
  margin-top: 8px;
  color: ${props => props.theme.color.playbarFontColor};
`;

const IconWrapper = styled.div`
  width: 115px;
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  position: relative;
  .icon:hover {
    color: ${props => props.theme.color.white};
  }
`;

const TrackWrapper = styled.div`
  padding-left: 18px;
  min-width: 350px;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${props => props.theme.color.playbarFontColor};
`;

export default PlayTrackItem;

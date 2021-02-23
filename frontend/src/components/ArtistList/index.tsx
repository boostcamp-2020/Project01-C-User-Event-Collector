import React from 'react';
import styled from '@styles/themed-components';
import ArtistCard from '@components/Common/Card/ArtistCard';
import { mutate } from 'swr';
import api from '@api/index';
import { useAuthDispatch } from '@context/AuthContext';

const ArtistList = ({ artistList }) => {
  const dispatch = useAuthDispatch();

  const fetchData = async id => {
    await api.delete(`library/artists/${id}`);
    dispatch({ type: 'DELETE_ARTIST', artistId: id });
    const updatedArtists = await artistList.filter(artist => artist.id !== id);
    mutate(
      '/library/artists',
      data => {
        return { ...data, data: updatedArtists };
      },
      false,
    );
  };

  const deleteArtist = (e, id) => {
    fetchData(id);
  };

  return (
    <ListContainer>
      {artistList
        ? artistList?.map(artist => (
            <ArtistCard
            key={artist.id}
            artistMetaData={artist}
            deleteArtist={deleteArtist}
            type="myArtist"
          />
          ))
        : null}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${props => props.theme.size.smallCarouselContentWidth}, 1fr)
  );
  grid-gap: 45px 0;
`;

export default ArtistList;

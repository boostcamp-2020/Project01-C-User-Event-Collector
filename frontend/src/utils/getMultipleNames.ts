const getMultipleNames = artists => {
  return artists?.map(artist => artist.name).join(', ');
};

export default getMultipleNames;

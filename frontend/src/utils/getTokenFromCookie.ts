const getTokenFromCookie = headers => {
  const cookie = headers?.cookie;
  const tokenFromCookie = cookie
    ?.split('; ')
    ?.find(row => row.startsWith('token'))
    ?.split('=')[1];
  return typeof tokenFromCookie === 'undefined' ? null : tokenFromCookie;
};

export default getTokenFromCookie;

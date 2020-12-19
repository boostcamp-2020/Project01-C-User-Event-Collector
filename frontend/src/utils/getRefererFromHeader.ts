const getRefererFromHeader = headers => {
  const regex = /(http:\/\/)([A-Z,a-z,:,.,0-9]*)/;
  const host = headers?.referer?.match(regex)[0];
  const referer = headers?.referer?.slice(host.length);
  return referer || 'external';
};
export default getRefererFromHeader;

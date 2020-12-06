const trimContentLength = (text, len): string => {
  if (text.length < len) return text;
  return `${text.substring(0, len)}...`;
};

export default trimContentLength;

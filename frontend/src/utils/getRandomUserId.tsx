const getRandomUserId = (): number => {
  const min = Math.ceil(1000000);
  const max = Math.floor(9999999);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default getRandomUserId;

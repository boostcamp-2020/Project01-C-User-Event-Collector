import useSWR from 'swr';

const useFetch = (url, token) => {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: token,
    },
    credentails: 'true',
  };
  const fetcher = endpoint =>
    fetch(process.env.NEXT_PUBLIC_API_BASE_URL + endpoint, options).then(res => res.json());

  const { data, error, mutate } = useSWR(url, fetcher);
  return {
    data,
    mutate,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useFetch;

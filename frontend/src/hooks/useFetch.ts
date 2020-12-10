import useSWR from 'swr';

const options = {
  method: 'GET',
  // Todo
  // 헤더에 토큰 추가하기, cors 이슈 해결
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
  credentails: 'true',
};

const baseUrl = 'http://115.85.181.152:8000/api';
const fetcher = url => fetch(baseUrl + url, options).then(res => res.json());

const useFetch = url => {
  const { data, error } = useSWR(url, fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useFetch;

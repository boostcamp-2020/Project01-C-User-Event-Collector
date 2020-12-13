import useSWR from 'swr';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywibmlja25hbWUiOiLslYTroZzrpqwiLCJlbWFpbCI6InNrbmdsZWUyMkBuYXZlci5jb20iLCJwcm9maWxlVVJMIjoiaHR0cHM6Ly9waGluZi5wc3RhdGljLm5ldC9jb250YWN0LzIwMjAwNzA3XzEzNC8xNTk0MDkwNzM4MjIzRFV3d21fSlBFRy8yMDE2MDkxM18xNDMzMTcuanBnIn0.b8loSQaZF3aDjH2VxJGWDkAyj0vB2s4_Oi9dDuR1FqY';

const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: token,
  },
  credentails: 'true',
};

const baseUrl = 'http://localhost:8000/api';
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

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywibmlja25hbWUiOiLslYTroZzrpqwiLCJlbWFpbCI6InNrbmdsZWUyMkBuYXZlci5jb20iLCJwcm9maWxlVVJMIjoiaHR0cHM6Ly9waGluZi5wc3RhdGljLm5ldC9jb250YWN0LzIwMjAwNzA3XzEzNC8xNTk0MDkwNzM4MjIzRFV3d21fSlBFRy8yMDE2MDkxM18xNDMzMTcuanBnIiwiZXhwIjoxNjA3NTEzMjczfQ.b5G4gNeN_qll_dBin0jzQYCD8lOXwf3xbJqHvdVaa88';
// const API = axios.create({
//   baseURL: 'localhost:8000/api',
//   headers: {
//     'sec-fetch-mode': 'no-cors',
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//     Authorization: token,
//   },
// });

const fetchData = async data => {
  console.log('fetchData 시작!');
  console.log(data);
  await fetch('http://115.85.181.152:8000/api/log', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      RequestMode: 'no-cors',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

export default fetchData;

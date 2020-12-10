import axios from 'axios';

const fetchData = async data => {
  const token = document.cookie.split('token=')[1];
  axios.post('http://localhost:8000/api/log', data, {
    headers: {
      Authorization: token,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers':
        'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    },
  });
};

export default fetchData;

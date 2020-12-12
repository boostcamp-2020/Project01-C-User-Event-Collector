import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywibmlja25hbWUiOiLslYTroZzrpqwiLCJlbWFpbCI6InNrbmdsZWUyMkBuYXZlci5jb20iLCJwcm9maWxlVVJMIjoiaHR0cHM6Ly9waGluZi5wc3RhdGljLm5ldC9jb250YWN0LzIwMjAwNzA3XzEzNC8xNTk0MDkwNzM4MjIzRFV3d21fSlBFRy8yMDE2MDkxM18xNDMzMTcuanBnIn0.b8loSQaZF3aDjH2VxJGWDkAyj0vB2s4_Oi9dDuR1FqY';
const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
    'Access-Control-Allow-Headers':
      'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    Authorization: token,
  },
  validateStatus(status) {
    return status < 500;
  },
});

export default api;

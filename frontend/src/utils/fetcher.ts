import axios, { AxiosRequestConfig } from 'axios';

const options = (method, data) => ({
  method,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(data),
});

// const getRequest: AxiosRequestConfig = {
//   baseURL: 'http://115.85.181.152:3000/api',
//   withCredentials: true,
//   method: 'GET',
// };

const API = axios.create({
  baseURL: 'http://115.85.181.152:3000/api',
  headers: {
    Authorization: localStorage.getItem('token'),
  },
});

export default API;

import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  validateStatus(status) {
    return status < 500;
  },
});
export default api;

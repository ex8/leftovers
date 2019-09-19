import api from './api';

export default function setToken(token) {
  api.defaults.headers.common['Authorization'] = '';
  delete api.defaults.headers.common['Authorization'];
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};

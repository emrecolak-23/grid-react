import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ZMHhvkmm5GJH0srQX_QKCkF1eNsTdfE8PwDt61NWv5Q',
  },
});

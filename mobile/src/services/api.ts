import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.6:7999'
});

export { api };
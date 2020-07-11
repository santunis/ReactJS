import axios from 'axios';

const api = axios.create({ baseURL: 'localhost:5001/api' });

export default api;
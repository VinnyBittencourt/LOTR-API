import axios from 'axios';

const api = axios.create({
    baseURL: 'https://the-one-api.herokuapp.com/v1',
});

export default api;

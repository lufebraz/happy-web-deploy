import axios from 'axios';

const api = axios.create({
    baseURL: 'https://lufebraz-happy-deploy.herokuapp.com',
    // baseURL: 'http://localhost:3333',

})

export default api;
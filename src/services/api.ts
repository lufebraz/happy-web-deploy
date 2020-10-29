import axios from 'axios';

const api = axios.create({
    baseURL: 'https://lufebraz-happy-deploy.herokuapp.com',
})

export default api;
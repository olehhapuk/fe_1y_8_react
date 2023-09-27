import axios from 'axios';

const apiKey = 'API_KEY';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.header.authorization = `Bearer ${apiKey}`;

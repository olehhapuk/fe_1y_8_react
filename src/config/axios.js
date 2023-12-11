import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTliNTliM2I2YzU3NDIxOWU5MThhMGYzMTQ0MTk4ZiIsInN1YiI6IjVmYTgwNWVkMjE2MjFkMDAzZmY3OWJhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NZDDd4p9-MW6pkDpjl9MeRx_NyFF2OUOYMEb4APzR1E';

axios.defaults.headers.authorization = `Bearer ${token}`;
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

import axios from 'axios';

export function getTrendingMoviesService() {
  return axios.get('/trending/movie/week').then((res) => res.data);
}

export function getMovieDetailsService(movieId) {
  return axios.get(`/movie/${movieId}`).then((res) => res.data);
}

export function getMovieCreditsService(movieId) {
  return axios.get(`/movie/${movieId}/credits`).then((res) => res.data);
}

export function getMovieReviewsService(movieId) {
  return axios.get(`/movie/${movieId}/reviews`).then((res) => res.data);
}

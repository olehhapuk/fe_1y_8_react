import axios from 'axios';

export function getAllPostsService(params) {
  return axios.get('/posts', {
    params,
  });
}

export function createPostService(data) {
  return axios.post('/posts', data);
}

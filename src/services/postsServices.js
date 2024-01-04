import axios from 'axios';

export function getAllPostsService(params) {
  return axios.get('/posts', {
    params,
  });
}

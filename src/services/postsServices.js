import axios from 'axios';

export function getAllPostsService(params) {
  return axios.get('/posts', {
    params,
  });
}

export function createPostService(data) {
  return axios.post('/posts', data);
}

export function getPostDetailsService(postId) {
  return axios.get(`/posts/${postId}`);
}

export function likePostService(postId) {
  return axios.post(`/posts/${postId}/like`);
}

export function deletePostService(postId) {
  return axios.delete(`/posts/${postId}`);
}

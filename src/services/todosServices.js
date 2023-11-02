import axios from 'axios';

export function getTodoDetailsService(id) {
  return axios
    .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res) => res.data);
}

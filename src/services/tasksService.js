import axios from 'axios';

// export async function getTasks() {
//   const res = await axios.get('/tasks');
//   return res.data;
// }

export function getTasks() {
  return axios.get('/tasks').then((res) => res.data);
}

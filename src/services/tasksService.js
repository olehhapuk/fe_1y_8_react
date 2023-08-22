import axios from 'axios';

// export async function getTasks() {
//   const res = await axios.get('/tasks');
//   return res.data;
// }

export function getTasksService() {
  return axios.get('/tasks').then((res) => res.data);
}

export function addTaskService(text) {
  return axios
    .post('/tasks', {
      text,
      completed: false,
    })
    .then((res) => res.data);
}

export function updateTaskService(id, completed) {
  // /tasks/3
  return axios
    .patch(`/tasks/${id}`, {
      completed,
    })
    .then((res) => res.data);
}

export function removeTaskService(id) {
  return axios.delete(`/tasks/${id}`).then((res) => res.data);
}

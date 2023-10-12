import axios from 'axios';

export function getAllContactsService() {
  return axios.get('/contacts').then((res) => res.data);
}

export function createContactService(data) {
  return axios.post('/contacts', data).then((res) => res.data);
}

export function deleteContactService(id) {
  return axios.delete(`/contacts/${id}`);
}

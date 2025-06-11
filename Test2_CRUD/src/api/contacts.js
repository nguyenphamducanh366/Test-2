import axios from 'axios';

const API_URL = 'http://localhost:3000/contacts';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getContacts = () => api.get('/');
export const createContact = (contact) => api.post('/', contact);
export const updateContact = (id, contact) => api.put(`/${id}`, contact);
export const deleteContact = (id) => api.delete(`/${id}`);
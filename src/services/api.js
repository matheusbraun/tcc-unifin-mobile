import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tcc-unifin.now.sh',
});

export const loadPets = async params => {
  const response = await api.get('/pets');

  return response.data;
};

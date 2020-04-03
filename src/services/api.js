import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tcc-unifin.now.sh',
});

export const loadPets = async () => {
  const response = await api.get('/pets');

  return response.data;
};

export const createLostPet = async payload => {
  await api.post('/pets', payload);
};

export const searchPets = async data => {
  const { distance, latitude, longitude, specie } = data;

  const response = await api.get(
    `/search/?distance=${distance}&latitude=${latitude}&longitude=${longitude}&specie=${specie}`,
  );

  return response.data;
};

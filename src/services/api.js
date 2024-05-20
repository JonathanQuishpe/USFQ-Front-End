import axios from 'axios';


const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export const getUsers = async () => {
  return api.get('/users');
  /*try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener usuarios');
  }*/
};

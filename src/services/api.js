import axios from 'axios';


const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

export const getUsers = async (id) => {
  return api.get(`/student/${id}`);
};

export const sendEmail = async (data) => {
  return api.post(`/receiveEmail`, data);
};

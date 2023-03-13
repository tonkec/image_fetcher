import axios from 'axios';
export const createAxionsInstance = (url: string) => {
  return axios.create({
    baseURL: url,
  });
};

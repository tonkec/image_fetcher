import { AxiosResponse } from 'axios';
import { ImageModel } from '../models/Image';
import { createAxionsInstance } from './helper';

const axiosInstance = createAxionsInstance('https://picsum.photos/');

export const getAllImages = async (): Promise<AxiosResponse[]> => {
  const response = await Promise.all([
    axiosInstance.get(`id/1/info/`),
    axiosInstance.get(`id/12/info/`),
    axiosInstance.get(`id/23/info/`),
    axiosInstance.get(`id/34/info/`),
    axiosInstance.get(`id/45/info/`),
    axiosInstance.get(`id/56/info/`),
    axiosInstance.get(`id/67/info/`),
  ]);

  return response;
};

import { ImageModel } from '../models/Image';
import { createAxionsInstance } from './helper';

const axiosInstance = createAxionsInstance('https://picsum.photos/v2/list');

export const getAllImages = async (): Promise<ImageModel[]> => {
  const response = await axiosInstance.get('/');
  return response.data;
};

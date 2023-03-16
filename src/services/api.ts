import { createAxionsInstance } from './helper';

const axiosInstance = createAxionsInstance('https://picsum.photos/');

export const getAllImages = async (page: number, limit: number) => {
  const response = await axiosInstance.get(
    `v2/list?page=${page}&limit=${limit}`
  );
  return response.data;
};

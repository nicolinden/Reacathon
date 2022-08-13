import { api } from './api';

export const company = () => {
  const getCompany = async () => {
    try {
      const response = await api.get('/v4/company');

      return response.data;
    } catch (error) {
      throw new Error(String(error));
    }
  };

  return { getCompany };
};

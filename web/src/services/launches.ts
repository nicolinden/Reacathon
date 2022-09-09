import { api } from './api';

export const launches = () => {
  const getLaunches = async () => {
    try {
      const response = await api.get('/v4/launches');

      return response.data;
    } catch (error) {
      throw new Error(String(error));
    }
  };

  const getSingleLaunch = async (launchId: any) => {
    try {
        const response = await api.get(`/v4/launches/${launchId}`);

        return response.data;
      } catch (error) {
        throw new Error(String(error));
      }
  };

  return { getLaunches, getSingleLaunch };
};

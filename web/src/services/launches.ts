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

  const getLaunchDetails = async (launchId: string | undefined) => {
    try {
      if (launchId) {
        const response = await api.get(`/v4/launches/${launchId}`);
        return response.data;
      }
      throw new Error("Invalid URL parameter!");
    } catch (error) {
      throw new Error(String(error));
    }
  };

  const getLaunchPadDetails = async (launchPadId: string | undefined) => {
    try {
      if (launchPadId) {
        const response = await api.get(`/v4/launchpads/${launchPadId}`);
        return response.data;
      }
      throw new Error("Invalid URL parameter!");
    } catch (error) {
      throw new Error(String(error));
    }
  };

  return { getLaunches, getLaunchDetails, getLaunchPadDetails };
};

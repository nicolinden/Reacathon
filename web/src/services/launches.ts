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

  const getLaunchpadDetails = async (launchPadId: any) => {
    try {
        const response = await api.get(`/v4/launchpads/${launchPadId}`);

        return response.data;
      } catch (error) {
        throw new Error(String(error));
      }
  };

  const getShips = async (launchId: any) => {
    try {
      // get ships to retrieve
      console.log(`Getting ships for launch: ${launchId}`);
        const response:any = await api.get(`/v4/launches/${launchId}`);

      console.log(`the whole thing: ${JSON.stringify(response)}`);
      console.log(`Ships found: ${JSON.stringify(response.data.ships)}`);

      // retrieve ships one by one
      const aShips = [];
      for( const shipName of response.data.ships){
        const ship = await api.get(`/v4/ships/${shipName}`);
        aShips.push(ship.data);
      }
        return aShips;
      } catch (error) {
        throw new Error(String(error));
      }
  };

  return { getLaunches, getSingleLaunch, getLaunchpadDetails, getShips };
};

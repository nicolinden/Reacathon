import { Pane } from 'evergreen-ui';
import React, { useEffect, useState } from 'react';
import { launches } from 'src/services/launches';
import { Outlet, useOutletContext, useParams } from "react-router-dom";
import { TabBar } from 'src/components/Footer/TabBar';
import { Map } from 'src/components/Map/Map';
import { Header } from 'src/components/Header/Header';

export const InfoPage: React.FC<any> = () => {
    const launchDetails = useOutletContext<any>();
    const [launchPadDetails, setLaunchPadDetails] = useState<any>({});
    const [hasPosition, setHasPosition] = useState<any>(false);

    useEffect(() => {
        if (!launchDetails.launchpad) return;
      launches()
        .getLaunchPadDetails(launchDetails.launchpad)
        .then((data) => {
            setLaunchPadDetails(data);
            setHasPosition(data.longitude && data.latitude);
        })
        .catch((e) => console.error(e));
    }, [launchDetails.launchpad]);
//   const { lauchId } = useParams();
//   const [launchDetails, setLaunchDetails] = useState<any>({});

//   useEffect(() => {
//     launches()
//       .getLaunchDetails(lauchId)
//       .then((data) => setLaunchDetails(data))
//       .catch((e) => console.error(e));
//   }, [lauchId]);

  return (
    <Pane>
      <main>
          <Header headerTitle={launchDetails.name} showBackButton={true} />
          { hasPosition && <Map position={[launchPadDetails.latitude, launchPadDetails.longitude]} /> }
      </main>
    </Pane>
  );
};

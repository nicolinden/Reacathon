import { Pane } from 'evergreen-ui';
import React, { useEffect, useState } from 'react';
import { Header } from 'src/components/Header/Header';
import { launches } from 'src/services/launches';
import { Outlet, useParams } from "react-router-dom";
import { TabBar } from 'src/components/Footer/TabBar';

export const LaunchDetailPage: React.FC<any> = () => {
  const { lauchId } = useParams();
  const [launchDetails, setLaunchDetails] = useState<any>({});

  useEffect(() => {
    launches()
      .getLaunchDetails(lauchId)
      .then((data) => setLaunchDetails(data))
      .catch((e) => console.error(e));
  }, [lauchId]);

  return (
    <Pane>
      <main>
        <Outlet />
        {/* <div>{launchDetails.name} {launchDetails.id}</div> */}
        <TabBar />
      </main>
    </Pane>
  );
};

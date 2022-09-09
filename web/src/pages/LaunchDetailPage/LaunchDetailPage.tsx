import { Pane } from 'evergreen-ui';
import React, { useEffect, useState } from 'react';
import { Header } from 'src/components/Header/Header';
import { launches } from 'src/services/launches';
import { useParams } from "react-router-dom";
import { Map } from 'src/components/Map/Map';

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
      <Header headerTitle={launchDetails.name} showBackButton={true} />
      <main>
        <Map position={[51.505, -0.09]} />
      </main>
    </Pane>
  );
};

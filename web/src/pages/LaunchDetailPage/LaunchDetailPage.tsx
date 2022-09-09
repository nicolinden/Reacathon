import { Pane } from 'evergreen-ui';
import React, { useEffect, useState } from 'react';
import { Header } from 'src/components/Header/Header';
import { launches } from 'src/services/launches';
import { useParams } from "react-router-dom";

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
      <Header />
      <main>
        <div>{launchDetails.name} {launchDetails.id}</div>
      </main>
    </Pane>
  );
};

import {
  Button,
  ThumbsUpIcon,
  NotificationsIcon,
  Pulsar,
  Position,
  Pane,
} from 'evergreen-ui';
import React, { useEffect, useState } from 'react';
import { Feedback } from 'src/components/Feedback/Feedback';
import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';
import { company } from 'src/services/company';
import { launches } from 'src/services/launches';
import { Launch } from 'src/components/Launch/Launch';

export const Home: React.FC = () => {
    //Getting launches from SpaceX
    const [launchDetails, setLaunchDetails] = useState([]);
    useEffect(() => {
      launches()
        .getLaunches()
        .then((data) => {
          console.log(data);
          setLaunchDetails(data);
        })
        .catch((e) => console.error(e));
    }, []);

  return (
    <Pane>
      <Header />
      <main>
        {launchDetails.map((launch: any) => (
          <Launch key={launch.id} icon={launch.links.patch.small}
          title={launch.name}
          date={launch.date_utc} success={launch.success}
          />
        ))}
      </main>
    </Pane>
  );
};

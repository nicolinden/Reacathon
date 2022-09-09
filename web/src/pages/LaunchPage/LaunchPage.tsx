import {
    Button,
    ThumbsUpIcon,
    NotificationsIcon,
    Pulsar,
    Position,
    Pane,
  } from 'evergreen-ui';
  import React, { useEffect, useState } from 'react';
  import { launches } from 'src/services/launches';
  import { useParams } from 'react-router-dom';

  export const LaunchPage: React.FC = () => {
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
        const { launchId } = useParams();

        return (
          <div>
            <h3>ID: {launchId}</h3>
          </div>
        );
  };

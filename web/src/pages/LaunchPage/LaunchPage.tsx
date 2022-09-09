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
      //Getting single Launch from SpaceX
      const  [launchId, setLaunchId] = useState<any>(useParams().launchId);
      const [launchSingleDetail, setLaunchSingleDetail] = useState<any>({});

      useEffect(() => {
        launches()
          .getSingleLaunch(launchId)
          .then((data) => {
            setLaunchSingleDetail(data);
          })
          .catch((e) => console.error(e));
      }, [launchId]);

        return (
          <div>
            <input onChange={(e) => {
              setLaunchId(e.target.value);
            }}
            />
            <h3>ID: {launchId}</h3>
            <h3>Title: {launchSingleDetail.name}</h3>
          </div>
        );
  };

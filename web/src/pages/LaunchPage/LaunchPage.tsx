import {
    Button,
    TabNavigation,
    Tab,
  } from 'evergreen-ui';
  import React, { useEffect, useState } from 'react';
  import { launches } from 'src/services/launches';
  import { Ship } from 'src/components/Ship/Ship';
  import { useParams } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { SiStarship } from 'react-icons/si';
import { RiShipFill } from 'react-icons/ri';
import { NavigationBar } from 'src/components/NavigationBar/NavigationBar';

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
            <Button marginRight={16} intent="danger"
                onClick={()=>{window.location.href=`/ships/${launchId}`;}}
            >
                Ship info
            </Button>
            {/* <NavigationBar launchId={launchId}/> */}
            <TabNavigation className="iconBar" height="50px">
  {[{ name:'Launch',href:`/launch/${launchId}` }, { name:'Ships',href:`/ships/${launchId}` }].map((tab, index) => (
    <Tab key={tab.name} is="a" href={tab.href} id={tab.name} isSelected={index === 0}>
      <IconContext.Provider value={{ color:'black', size: '40px' }}>
      {tab.name === "Launch" ? <SiStarship /> : <RiShipFill />}
      </IconContext.Provider>
    </Tab>
  ))}
</TabNavigation>
          </div>
        );
  };

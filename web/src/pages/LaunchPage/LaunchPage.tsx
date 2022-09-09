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
  import { Ship } from 'src/components/Ship/Ship';
  import { useParams } from 'react-router-dom';
  import { useMapEvents, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

  export const LaunchPage: React.FC = () => {
      //Getting single Launch from SpaceX
      const  [launchId, setLaunchId] = useState<any>(useParams().launchId);
      const [launchSingleDetail, setLaunchSingleDetail] = useState<any>();
      const [hasPosition, setHasPosition] = useState<any>(false);

      useEffect(() => {
        launches()
          .getSingleLaunch(launchId)
          .then((data) => {
            setLaunchSingleDetail(data);
          })
          .catch((e) => console.error(e));
      }, [launchId]);

      const [launchPadDetail, setLaunchPadDetail] = useState<any>({});

      useEffect(() => {
        console.log(launchSingleDetail);
        if (!launchSingleDetail) return;
        launches()
          .getLaunchpadDetails(launchSingleDetail.launchpad)
          .then((data) => {
            setLaunchPadDetail(data);
            setHasPosition(data.latitude && data.longitude);
          })
          .catch((e) => console.error(e));
      }, [launchSingleDetail]);

      if(!launchSingleDetail) return(<div/>);
      const position:any = launchPadDetail.latitude ? [launchPadDetail.latitude, launchPadDetail.longitude] : [0,0] ;

        return (
          <div>
            <h3>ID: {launchId}</h3>
            <h3>Title: {launchSingleDetail.name}</h3>
            <div id="map">
              {
                hasPosition &&
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
              }
          </div>
            <Button marginRight={16} intent="danger"
                onClick={()=>{window.location.href=`/ships/${launchId}`;}}
            >
                Ship info
            </Button>
          </div>
        );
  };

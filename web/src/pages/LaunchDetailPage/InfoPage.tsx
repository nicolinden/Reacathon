import { Heading, majorScale, Pane, Text, Image } from 'evergreen-ui';
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
        <Header headerTitle={launchDetails.name} showBackButton={true} />
        { hasPosition && <Map position={[launchPadDetails.latitude, launchPadDetails.longitude]} /> }
        { !hasPosition && <Heading>Loading Data...</Heading> }

        <Pane display="flex" flexDirection="column" alignContent="Center" alignItems="Center">
            {launchDetails.links &&
                <Image src={launchDetails.links.patch.small} width="80px" height="80px" className="launchImage" />
            }
            <Pane padding={majorScale(1)}>
                <Heading>{launchDetails.name}</Heading>
                <Text>{launchDetails.details}</Text>
            </Pane>
        </Pane>
    </Pane>
  );
};

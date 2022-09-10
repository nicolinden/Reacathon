import { Box, Button, Divider, Stack } from '@mui/material';
import {
  Pane,
  ListItem,
  UnorderedList,
  RocketSlantIcon,
  Image,
  Text,
  Icon,
  EndorsedIcon,
  minorScale,
  majorScale,
  Heading } from 'evergreen-ui';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Header } from 'src/components/Header/Header';
import { launches } from 'src/services/launches';
import { Footer } from 'src/components/Footer/Footer';
import { TabBar } from 'src/components/Footer/TabBar';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

export const Home: React.FC<any> = () => {
  const [launchList, setLaunchList] = useState<any>([]);

  useEffect(() => {
    launches()
      .getLaunches()
      .then((data) => setLaunchList(data))
      .catch((e) => console.error(e));
  }, []);

  // const LaunchList: React.FC = ({ children }) => {
  //   return (
  //     <Pane backgroundColor="red">
  //       <UnorderedList>{children}</UnorderedList>
  //     </Pane>
  //   );
  // };

  const LaunchItem = ({ launchId, launchDate, launchSuccess, image, name }: any) => {
    return (
      <Link to={`/${launchId}/info`} style={ { textDecoration:'none' } }>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between" alignContent="Center" alignItems="Center"
        >
          <Box display="flex" flexDirection="row" alignContent="center" alignItems="center" sx={{ p: 1 }}>
            <Image src={image} width="44px" height="44px"/>
            <Box display="flex" flexDirection="column" sx={{ p: 1 }}>
              <Heading>{name}</Heading>
              <Text>{launchDate}</Text>
            </Box>
          </Box>
          <Box sx={{ p: 1 }}>
              { launchSuccess ? <CheckCircleIcon color="success" /> : <ErrorIcon color="error" /> }
            <ChevronRightIcon color="secondary" sx={{ pl: 1 }} />
          </Box>
        </Box>
      </Link>
    );
  };

  const listItems = launchList.map((launch: any) => {
    return (
      <LaunchItem
        key={launch.id}
        launchId={launch.id}
        launchDate={new Date(launch.date_utc).toLocaleDateString("en-US")}
        launchSuccess={launch.success} image={launch.links.patch.small} name={launch.name}
      />
      // <LaunchList></LaunchList>
      // <ListItem key={launch.id}>
      //   <Link target="__blank" href="https://reactjs.org/docs/getting-started.html">
      //     {launch.name}
      //   </Link>
      // </ListItem>
    );
  });

  return (
    <Pane>
      <Header headerTitle="Space X Launches" showBackButton={false} />
      <main>
        <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
          {listItems}
        </Stack>
      </main>
    </Pane>
  );
};

import {
  Pane,
  ListItem,
  UnorderedList,
  RocketSlantIcon,
  Image,
  Text,
  Icon,
  EndorsedIcon,
  ChevronRightIcon,
  ErrorIcon,
  minorScale,
  majorScale,
  Heading } from 'evergreen-ui';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Header } from 'src/components/Header/Header';
import { launches } from 'src/services/launches';

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

  const LaunchItem = ({ launchId, launchDate, success, image, name }: any) => {
    return (
      <Link to={`/${launchId}`} style={ { textDecoration:'none' } }>
        <Pane display="flex" flexDirection="row"
          justifyContent="space-between" padding={majorScale(1)} alignContent="Center" alignItems="Center"
        >
          <Pane display="flex" flexDirection="row" alignContent="center" alignItems="center">
            <Image src={image} width="44px" height="44px"/>
            <Pane display="flex" flexDirection="column" padding={majorScale(1)}>
              <Heading>{name}</Heading>
              <Text>{launchDate}</Text>
            </Pane>
          </Pane>
          <Pane>
            <Icon icon={success ? EndorsedIcon : ErrorIcon} color={success ? 'green' : 'red'} size={18} />
            <Icon icon={ChevronRightIcon} color="gray" paddingLeft={majorScale(1)} />
          </Pane>
        </Pane>
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
        <UnorderedList icon={RocketSlantIcon} iconColor="info">
          {listItems}
        </UnorderedList>
      </main>
    </Pane>
  );
};

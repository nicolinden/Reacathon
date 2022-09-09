import {
  Pane,
  ListItem,
  UnorderedList,
  RocketSlantIcon,
  Image,
  Text,
  Icon,
  minorScale,
  majorScale } from 'evergreen-ui';
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

  const LaunchItem = ({ launchId, image, name }: any) => {
    const [isSuccess, setIsSuccess] = useState(false);
    return (
      <Link to={`/${launchId}`}>
        <Pane display="flex" flexDirection="row" justifyContent="space-between" padding={majorScale(1)}>
          <Pane display="flex" flexDirection="row" alignContent="center" alignItems="center">
            <Image src={image} width="44px" height="44px"/>
            <Pane display="flex" flexDirection="column" padding={majorScale(1)}>
              <Text>{name}</Text>
              <Text>date</Text>
            </Pane>
          </Pane>
          <Icon icon={RocketSlantIcon} color={isSuccess ? 'green' : 'red'} />
        </Pane>
      </Link>
    );
  };

  const listItems = launchList.map((launch: any) => {
    return (
      <LaunchItem key={launch.id} launchId={launch.id} image={launch.links.patch.small} name={launch.name}/>
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
      <Header headerTitle="" showBackButton={false} />
      <main>
        <UnorderedList icon={RocketSlantIcon} iconColor="info">
          {listItems}
        </UnorderedList>
      </main>
    </Pane>
  );
};

import { Pane, Link, ListItem, UnorderedList, RocketSlantIcon, Image, Text, Icon } from 'evergreen-ui';
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

  const LaunchItem = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    return (
      <Pane display="flex" flexDirection="row" justifyContent="space-between">
        <Pane>
          <Image />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Text>name</Text>
            <Text>date</Text>
          </div>
        </Pane>
        <Icon icon={RocketSlantIcon} color={isSuccess ? 'green' : 'red'} />
      </Pane>
    );
  };

  const listItems = launchList.map((launch: any) => {
    return (
      <LaunchItem key={launch.id} />
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
      <Header />
      <main>
        <UnorderedList icon={RocketSlantIcon} iconColor="info">
          {listItems}
        </UnorderedList>
      </main>
    </Pane>
  );
};

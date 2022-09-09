import { Pane, Link, ListItem, UnorderedList, RocketSlantIcon } from 'evergreen-ui';
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

  const listItems = launchList.map((launch: any) => {
    return (
      <ListItem key={launch.id}>
        <Link target="__blank" href="https://reactjs.org/docs/getting-started.html">
          {launch.name}
        </Link>
      </ListItem>
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

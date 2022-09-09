import { Pane, ListItem, UnorderedList, RocketSlantIcon } from 'evergreen-ui';
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

  const listItems = launchList.map((launch: any) => {
    return (
      <ListItem key={launch.id}>
        <Link to={`/${launch.id}`}>
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

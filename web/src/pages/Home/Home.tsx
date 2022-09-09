import {
  Button,
  ThumbsUpIcon,
  NotificationsIcon,
  Dialog,
  Text,
  Paragraph,
  majorScale,
  Pulsar,
  Position,
  Pane,
  Link,
  ListItem,
  minorScale,
  Strong,
  UnorderedList,
  RocketSlantIcon,
} from 'evergreen-ui';
import React, { useEffect, useState } from 'react';
import { Feedback } from 'src/components/Feedback/Feedback';
import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';
import { company } from 'src/services/company';
import { launches } from 'src/services/launches';

export const Home: React.FC<any> = () => {
  const [isShown, setIsShown] = useState(false);
  // const [companyDetails, setCompanyDetails] = useState<any>({});
  const [launchList, setLaunchList] = useState<any>([]);

  const handleMessage = () => setIsShown(true);

  useEffect(() => {
    launches()
      .getLaunches()
      .then((data) => setLaunchList(data))
      .catch((e) => console.error(e));
  }, []);

  const listItems = launchList.map((launch: any) => {
    return (<ListItem key={launch.id}>
      <Link target="__blank" href="https://reactjs.org/docs/getting-started.html">
        {launch.name}
      </Link>
  </ListItem>);
  });

  return (
    <Pane>
      <Header />
      <main>
      <UnorderedList icon={RocketSlantIcon} iconColor="info">
        {listItems}
      </UnorderedList>

        {/* <Feedback
          icon={ThumbsUpIcon}
          title="Voorbeeld component"
          description="Vervang dit component en start de 'opdracht'"
          action={
            <Button iconBefore={NotificationsIcon} appearance="primary" intent="none" onClick={handleMessage}>
              Klik om er achter te komen welke api we gebruiken!
              <Pulsar position={Position.TOP_LEFT} />
            </Button>
          }
        /> */}
      </main>
      {/* <Footer /> */}

    </Pane>
  );
};

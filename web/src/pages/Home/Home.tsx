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
} from 'evergreen-ui';
import React, { useEffect, useState } from 'react';
import { Feedback } from 'src/components/Feedback/Feedback';
import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';
import { company } from 'src/services/company';
import { launches } from 'src/services/launches';
import { Launch } from 'src/components/Launch/Launch';

export const Home: React.FC = () => {
  const [isShown, setIsShown] = useState(false);
  const [companyDetails, setCompanyDetails] = useState<any>({});

  const handleMessage = () => setIsShown(true);

    //Getting launches from SpaceX
    const [launchDetails, setLaunchDetails] = useState([]);
    useEffect(() => {
      launches()
        .getLaunches()
        .then((data) => {
          console.log(data);
          setLaunchDetails(data);
        })
        .catch((e) => console.error(e));
    }, []);

  useEffect(() => {
    company()
      .getCompany()
      .then((data) => setCompanyDetails(data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <Pane>
      <Header />
      <main>
        {launchDetails.map((launch: any) => (
          <Launch key={launch.id} icon={launch.links.patch.small}
          title="ABS-2A / Eutelsat 117W B"
          date="13 June 2006" successIcon="/img/success.png"
          />
        ))}

        <Feedback
          icon={ThumbsUpIcon}
          title="Voorbeeld component"
          description="Vervang dit component en start de 'opdracht'"
          action={
            <Button iconBefore={NotificationsIcon} appearance="primary" intent="none" onClick={handleMessage}>
              Klik om er achter te komen welke api we gebruiken!
              <Pulsar position={Position.TOP_LEFT} />
            </Button>
          }
        />
      </main>
      <Footer />

      <Dialog title={companyDetails.name} isShown={isShown} onCloseComplete={() => setIsShown(false)} hasFooter={false}>
        <Paragraph marginBottom={majorScale(4)} size={500}>
          {companyDetails.summary}
        </Paragraph>
        <Text size={500}>Veel plezier met de Reacathon</Text>
      </Dialog>
    </Pane>
  );
};

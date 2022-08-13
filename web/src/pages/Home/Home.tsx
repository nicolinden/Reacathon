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

export const Home: React.FC = () => {
  const [isShown, setIsShown] = useState(false);
  const [companyDetails, setCompanyDetails] = useState<any>({});

  const handleMessage = () => setIsShown(true);

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

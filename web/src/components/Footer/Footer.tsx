import React from 'react';
import {
  Button,
  Icon,
  InfoSignIcon,
  Link,
  majorScale,
  minorScale,
  Pane,
  Paragraph,
  Popover,
  Position,
  Pulsar,
  ListItem,
  Heading,
  UnorderedList,
  Strong,
} from 'evergreen-ui';

export const Footer = () => {
  return (
    <Pane height={majorScale(6)} position="absolute" bottom="0" width="100%" background="gray50">
      <Popover
        content={
          <Pane
            width={360}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            padding={majorScale(3)}
          >
            <Heading size={600}>Info</Heading>
            <UnorderedList>
              <ListItem>
                <Link target="__blank" href="https://reactjs.org/docs/getting-started.html">
                  React docs
                </Link>
              </ListItem>
              <ListItem>
                <Link target="__blank" href="https://evergreen.segment.com/">
                  Evergreen component library docs
                </Link>
              </ListItem>
              <ListItem>
                <Link target="__blank" href="https://reactrouter.com/docs/en/v6">
                  React router docs
                </Link>
              </ListItem>
              <ListItem>
                <Paragraph padding={minorScale(1)}>
                  Niet bekend met Typescript? Geen zorg! Gebruik Javascript en waar je geblokkeerd wordt door types kan
                  je gewoon <Strong>any</Strong> gebruiken.
                </Paragraph>
              </ListItem>
              <ListItem>Zie xs-app.json en spacexRouter.js voor backend endpoints</ListItem>
            </UnorderedList>
          </Pane>
        }
        position={Position.BOTTOM_LEFT}
      >
        <Button display="flex" size="large" justifyContent="center" margin={minorScale(1)} padding={minorScale(1)}>
          <Icon color="blue500" icon={InfoSignIcon} size={24} />
          <Pulsar />
        </Button>
      </Popover>
    </Pane>
  );
};

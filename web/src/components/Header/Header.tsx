import React from 'react';
import { Heading, majorScale, Pane } from 'evergreen-ui';

export const Header = () => {
  return (
    <Pane
      height={majorScale(6)}
      background="green400"
      textAlign="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Heading size={600}>Reacathon</Heading>
    </Pane>
  );
};

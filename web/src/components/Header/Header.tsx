import React from 'react';
import { Heading, majorScale, Pane } from 'evergreen-ui';

export const Header = ({ name }: any) => {
  return (
    <Pane
      height={majorScale(6)}
      background="blue700"
      color="white"
      textAlign="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Heading size={600} color="white">{name}</Heading>
    </Pane>
  );
};

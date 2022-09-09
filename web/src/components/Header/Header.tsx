import React from 'react';
import { Button, Heading, majorScale, Pane } from 'evergreen-ui';
import { Route, Routes, useNavigate } from "react-router-dom";

interface HeaderInterface {
  showBackButton: boolean;
  headerTitle: string;
};

export const Header: React.FC<HeaderInterface> = (props) => {
  const { showBackButton, headerTitle } = props;
  const navigate = useNavigate();
  const navBack = () => navigate(-1);

  return (
    <Pane
      height={majorScale(6)}
      background="green400"
      textAlign="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {showBackButton && <Button onClick={navBack}>Back</Button>}
      <Heading size={600}>{headerTitle}</Heading>
    </Pane>
  );
};

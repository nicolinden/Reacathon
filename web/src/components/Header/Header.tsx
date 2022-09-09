import React from 'react';
import { Button, Heading, majorScale, Pane } from 'evergreen-ui';
import { useNavigate } from "react-router-dom";

interface HeaderInterface {
  showBackButton: boolean;
  headerTitle: string;
};

export const Header: React.FC<HeaderInterface> = (props) => {
  const { showBackButton, headerTitle } = props;
  const navigate = useNavigate();
  const navBack = () => navigate("/");

  return (
    <Pane
      height={majorScale(6)}
      background="blue700"
      textAlign="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {showBackButton && <Button onClick={navBack} style={{ marginLeft: '8px', marginRight: 'auto' }}>Back</Button>}
      <Heading size={600} color="white" style={{ margin: 'auto' }}>{headerTitle}</Heading>
    </Pane>
  );
};

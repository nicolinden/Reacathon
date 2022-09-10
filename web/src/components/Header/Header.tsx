import React from 'react';
import { Box, Button, Divider, Stack } from '@mui/material';
import { Heading, majorScale, Pane } from 'evergreen-ui';
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Icon from '@mui/material/Icon';

interface HeaderInterface {
  showBackButton: boolean;
  headerTitle: string;
};

export const Header: React.FC<HeaderInterface> = (props) => {
  const { showBackButton, headerTitle } = props;
  const navigate = useNavigate();
  const navBack = () => navigate("/");

  return (
    <Box
      textAlign="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor:"primary.dark" }}
    >
      {showBackButton && <Button variant="text" onClick={navBack}>
        <ChevronLeftIcon style={{ color: '#fff' }} />
      </Button>}
      <Heading size={600} color="white" style={{ margin: 'auto' }}>{headerTitle}</Heading>
    </Box>
  );
};

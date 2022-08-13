import React from 'react';
import { Button, Heading, majorScale, Pane, Paragraph, StepBackwardIcon } from 'evergreen-ui';
import { Link } from 'react-router-dom';

interface NotFoundProps {
  code?: string;
  description?: string;
  title?: string;
}

export const NotFound: React.FC<NotFoundProps> = (props) => {
  const { code = '404', title = 'Pagina niet gevonden', description = 'Weet je zeker dat de pagina bestaat?' } = props;

  return (
    <Pane
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100%"
      padding={majorScale(3)}
      gap={majorScale(2)}
    >
      <Heading size={900}>{title}</Heading>
      <Paragraph size={500}>
        {code}: {description}
      </Paragraph>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button iconBefore={StepBackwardIcon} appearance="primary">
          Terug naar home
        </Button>
      </Link>
    </Pane>
  );
};

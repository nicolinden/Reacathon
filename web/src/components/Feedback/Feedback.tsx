import {
  Heading,
  Icon,
  IconComponent,
  majorScale,
  Pane,
  Paragraph,
} from "evergreen-ui";
import React from "react";

interface FeedbackProps {
  icon: IconComponent;
  title: string;
  description: string;
  action?: React.ReactNode;
}

export const Feedback: React.FC<FeedbackProps> = (props) => {
  const { description, icon, title, action } = props;

  return (
    <Pane
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      padding={majorScale(2)}
      gap={majorScale(2)}
    >
      <Icon color="blue500" icon={icon} size={32} />
      <Pane>
        <Heading size={700}>{title}</Heading>
        <Paragraph
          size={500}
          padding={majorScale(2)}
          paddingBottom={majorScale(1)}
        >
          {description}
        </Paragraph>
      </Pane>
      {action && <>{action}</>}
    </Pane>
  );
};

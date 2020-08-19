import React, { ReactNode } from 'react';
import { Card, CardHeader, CardContent, Divider } from '@material-ui/core';

type FormContainerProps = {
  /**
   * The container's header title to be displayed.
   */
  title: string;

  /**
   * The icon to be rendered in the container's header,
   * usually a [Material Icon](https://material-ui.com/pt/components/material-icons).
   */
  icon: ReactNode;

  /**
   * The form container children components.
   */
  children: ReactNode;
};

/**
 * `FormContainer` should groups fieldsets
 * and its inputs in order to get the data
 * from the user.
 * @param props The component received props.
 */
const FormContainer: React.FC<FormContainerProps> = ({
  title,
  icon,
  children
}: FormContainerProps) => (
  <Card variant="elevation" raised>
    <CardHeader avatar={icon} title={title} />
    <Divider />
    <CardContent>{children}</CardContent>
  </Card>
);

export default FormContainer;

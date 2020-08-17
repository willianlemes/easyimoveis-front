import React from 'react';
import {
  Card,
  CardHeader,
  Avatar,
  Divider,
  CardContent
} from '@material-ui/core';

const About: React.FC = () => (
  <Card variant="elevation" raised>
    <CardHeader avatar={<Avatar>A</Avatar>} title="About" />
    <Divider />
    <CardContent>
      <h1>About</h1>
    </CardContent>
  </Card>
);

export default About;

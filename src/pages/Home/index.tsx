import React from 'react';
import {
  Card,
  CardHeader,
  Avatar,
  Divider,
  CardContent
} from '@material-ui/core';

const Home: React.FC = () => (
  <Card variant="elevation" raised>
    <CardHeader avatar={<Avatar>H</Avatar>} title="Home" />
    <Divider />
    <CardContent>
      <h1>Home</h1>
    </CardContent>
  </Card>
);

export default Home;

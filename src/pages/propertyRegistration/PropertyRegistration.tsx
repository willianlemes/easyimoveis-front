import React from 'react';
import { Grid } from '@material-ui/core';
import UseStyles from './Style.jsx';

const PropertyRegistration: React.FC = () => {
  const classes = UseStyles();
  return (
    <div className="app">
      <Grid container spacing={1}>
        <Grid container item xs={12}>
          <h1>Header</h1>
        </Grid>
      </Grid>
      <Grid className={classes.root} container spacing={1}>
        <Grid container item xs={4}>
          <h1>Container</h1>
        </Grid>
        <Grid container item xs={8}>
          <h1>Form</h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default PropertyRegistration;

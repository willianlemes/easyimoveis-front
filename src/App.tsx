import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Grid, Container, makeStyles } from '@material-ui/core';

import Menu from './containers/Menu';
import Routes from './routes';

import GlobalStyle from './styles';

const useStyles = makeStyles({
  root: {
    height: '80vh',
    display: 'flex',
    alignItems: 'center'
  }
});

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Container className={classes.root}>
          <Grid container spacing={4}>
            <Grid item lg={3}>
              <Menu />
            </Grid>
            <Grid item lg={9}>
              <Routes />
            </Grid>
          </Grid>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/negocios" exact />
      <Route path="/pessoas" exact />
      <Route path="/propriedades" exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;

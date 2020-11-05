import React from 'react';
import { Switch, Route } from 'react-router-dom';

import People from './pages/People';
import FormPerson from './pages/FormPerson';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/pessoas" exact>
        <People />
      </Route>
      <Route path="/pessoa" exact>
        <FormPerson />
      </Route>
      <Route path="/pessoa/:id" exact>
        <FormPerson />
      </Route>
    </Switch>
  );
};

export default Routes;

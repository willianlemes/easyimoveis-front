import React from 'react';
import { Switch, Route } from 'react-router-dom';

import People from './pages/People';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/pessoas" exact>
        <People />
      </Route>
    </Switch>
  );
};

export default Routes;

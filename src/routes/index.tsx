import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Business from '../pages/Business';
import People from '../pages/People';
import Properties from '../pages/Properties';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/negocios" exact component={Business} />
    <Route path="/pessoas" exact component={People} />
    <Route path="/propriedades" exact component={Properties} />
  </Switch>
);

export default Routes;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </div>
  );
}

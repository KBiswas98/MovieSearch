import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Screen1 from '../screens/screen 1';
import Screen2 from '../screens/screen 2';

export default function AppNavigation() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Screen1} />
          <Route exact path="/2" component={Screen2} />
        </Switch>
      </Router>
    </>
  );
}

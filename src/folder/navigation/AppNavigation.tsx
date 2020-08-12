import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Screen2 from '../screens/screen 2';

export default function AppNavigation() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/2" component={Screen2} />
        </Switch>
      </Router>
    </>
  );
}

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';

const SiteSwitch = () => {
  return (
    <Switch>
      <Route path="/view/home"  component={Home}/>
      <Route path="/home"  component={Home}/>
    </Switch>
  )
};

export default SiteSwitch;

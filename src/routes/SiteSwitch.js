import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Stock from '../components/Stock/Stock';

const SiteSwitch = () => {
  return (
    <Switch>
      <Route path="/view/home"  component={Home}/>
      <Route path="/home"  component={Home}/>
      <Route path="/stock" component={Stock}/>
    </Switch>
  )
};

export default SiteSwitch;

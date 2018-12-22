import React from 'react';
import { Switch, Route } from 'react-router-dom';

const SiteSwitch = () => {
  return (
    <Switch>
      <Route path="/home"  component={Home}/>
    </Switch>
  )
};

export default SiteSwitch;

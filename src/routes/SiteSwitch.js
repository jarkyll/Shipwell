import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../components/Home/Home";
import Nav from "../components/Nav/Nav";
import MapsContainer from "../components/Maps/MapsContainer";

const SiteSwitch = () => {
  return (
    <React.Fragment>
      <Nav />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/maps" component={MapsContainer} />
        <Redirect to="/home" />
      </Switch>
    </React.Fragment>
  );
};

export default SiteSwitch;

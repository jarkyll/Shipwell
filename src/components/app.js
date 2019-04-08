import { hot } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import { SiteSwitch } from "../routes";
import React from "react";
import "public/scss/main.scss";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <SiteSwitch />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
export default hot(module)(App);

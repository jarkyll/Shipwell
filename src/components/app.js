import { hot } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import { SiteSwitch } from "../routes";
import { connect } from "react-redux";
import React from "react";
import initSocket from "../utils/socket";
import Axios from "axios";
import "public/scss/main.scss";
import Nav from "src/components/Nav/Nav";
import SideNav from "./SideNav/SideNav";
import SearchModal from "./SearchModal/SearchModal";
import { getUserInfo, api } from "src/api/api";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideNav />
        <BrowserRouter>
          <SiteSwitch />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
export default hot(module)(App);

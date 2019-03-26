import { hot } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import { SiteSwitch } from "../routes";
import React from "react";
import initSocket from "../utils/socket";
import Axios from "axios";
import "public/scss/main.scss";
import Nav from "src/components/Nav/Nav";
import SideNav from "./SideNav/SideNav";

const Root = () => {
  return (
    <React.Fragment>
      <Nav />
      <div className="uk-padding">
        <SiteSwitch />
      </div>
    </React.Fragment>
  );
};

class App extends React.Component {
  componentDidMount() {
    // const eventSource = new EventSource("https://cloud-sse.iexapis.com/beta/stocksUS?token=pk_c09c75f7d31249918f579c2fc16f49fc&symbols=aapl")
    // eventSource.onmessage = function (e) {
    //     console.log('hi', e);
    // }
  }

  render() {
    return (
      <React.Fragment>
        <SideNav />
        <div>
          <BrowserRouter>
            <Root />
          </BrowserRouter>
        </div>
      </React.Fragment>
    );
  }
}
export default hot(module)(App);

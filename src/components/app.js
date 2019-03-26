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

let Root = props => {
  const { showSearchModal } = props;
  console.log(props);
  return (
    <React.Fragment>
      {showSearchModal ? (
        <SearchModal />
      ) : (
        <React.Fragment>
          <Nav />
          <div className="uk-padding">
            <SiteSwitch />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state, props) => {
  return {
    showSearchModal: state.global.showSearchModal
  };
};

Root = connect(mapStateToProps)(Root);

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
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
export default hot(module)(App);

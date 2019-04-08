import React from "react";
import Maps from "./Maps";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { withScriptjs } from "react-google-maps";

const MapLoader = withScriptjs(Maps);

class MapsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (_.isEmpty(this.props.start) || _.isEmpty(this.props.end)) {
      this.props.history.push("/");
    }
  }

  render() {
    if (_.isEmpty(this.props.start) || _.isEmpty(this.props.end)) {
      return <React.Fragment />;
    } else {
      return (
        <MapLoader
          start = {this.props.start}
          end = {this.props.end}
          company = {this.props.company}
          googleMapURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDurZQBXjtSzKeieXwtFeGe-jhZu-HEGQU"
          loadingElement = {<div style={{ height: `100%` }} />}
        />
      );
    }
  }
}

const mapStatetoProps = state => {
  return {
    start: state.global.geocodedStart,
    end: state.global.geocodedEnd,
    company: state.global.geocodedCompany
  };
};

export default withRouter(connect(mapStatetoProps)(MapsContainer));

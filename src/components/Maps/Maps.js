import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  Marker
} from "react-google-maps";


class Map extends React.Component {
  state = {
    directions: null
  };

  componentDidMount() {
    const directionsService = new google.maps.DirectionsService();

    const origin = {
      lat: this.props.start.latitude,
      lng: this.props.start.longitude
    };
    const destination = {
      lat: this.props.end.latitude,
      lng: this.props.end.longitude
    };

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

  render() {
    const GoogleMapContainer = withGoogleMap(props => (
      <GoogleMap
        defaultZoom={13}
      >
        <Marker key={0} position={ {lat: 30.266926, lng: -97.750519 }}></Marker>
        <DirectionsRenderer directions={this.state.directions} />
      </GoogleMap>
    ));

    return (
      <React.Fragment>
        <GoogleMapContainer
          containerElement={<div style={{ height: `100vh`}} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </React.Fragment>
    );
  }
}
export default Map;

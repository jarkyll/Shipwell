import axios from "axios";

const SHIPWELL_BASE_URL = "https://dev-api.shipwell.com";
const SHIPWELL_GET_URL = SHIPWELL_BASE_URL + "/v2/auth/me/";
const SHIPWELL_VALIDATE_URL =
  SHIPWELL_BASE_URL + "/v2/locations/addresses/validate/";

export const api = axios.create({
  timeout: 10000
});

api.interceptors.request.use(function(config) {
  // Step 1. Set the default headers.
  if (config.url === SHIPWELL_GET_URL) {
    config.headers["Authorization"] = "Token 4c4547fe6ad68c57cbac0a8cfbfec35b";
  }
  config.headers["Content-Type"] = "application/json";
  config.headers["Cache-Control"] = "no-cache";
  return config;
});

export const getUserInfo = () => {
  return api({
    method: "get",
    url: SHIPWELL_GET_URL
  })
    .then(response => ({ response }))
    .catch(error => ({ error }));
};

export const validateAddress = payload => {
  return api({
    method: "post",
    url: SHIPWELL_VALIDATE_URL,
    data: payload
  })
    .then(response => ({ response }))
    .catch(error => ({ error }));
};

export const getDirections = () => {
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
};

// Build a single page React application which will connect with the Google Maps and Shipwell APIs. The app will consist of two pages:

// Page 1 will begin by making a request in the background to retrieve the user’s information and store it in the Redux store. The following request can be made to retrieve the test user data:

// GET /v2/auth/me/

// Host: dev-api.shipwell.com

// Content-Type: application/json

// Cache-Control: no-cache

// Authorization: Token 4c4547fe6ad68c57cbac0a8cfbfec35b

// Page 1 will also have two input fields in which the user will enter a ‘to’ address and a ‘from’ address.  These addresses should be validated by the Shipwell API using the following schema:

// POST /v2/locations/addresses/validate/

// Host: dev-api.shipwell.com

// Content-Type: application/json

// Cache-Control: no-cache

// Example body:

// {

// “formatted_address”: “209 West 9th St. Austin, Texas 78701"

// }

// Page 2 will show Google Maps with markers on the two addresses that the user input on Page 1.  A route should be drawn between the two markers to show the directions. This page should also show some of the user’s data which will be pulled from the Redux store.

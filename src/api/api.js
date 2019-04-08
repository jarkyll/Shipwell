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

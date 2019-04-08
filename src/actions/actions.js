export const GET_USER_INFO_API = () => ({
  type: "GET_USER_INFO_API"
});

export const SET_USER_INFO = (payload) => ({
  type: "SET_USER_INFO",
  payload
});

export const VALIDATE_ADDRESS_API = (address, position) => ({
  type: "VALIDATE_ADDRESS_API",
  payload: {
    "formatted_address": address,
    position
  }
});

export const ADDRESS_FIELDS_VALIDITY = (isAddressValid, position) => ({
  type: "ADDRESS_FIELDS_VALIDITY",
  payload: {
    isAddressValid,
    position
  }
});

export const SET_ADDRESS = ({response: { data }}, position) => ({
  type: "SET_ADDRESS",
  payload: {
    response: data,
    position
  }
});

export const SET_INVALID_ADDRESS = (position) => ({
  type: "SET_INVALID_ADDRESS",
  payload: {
    position
  }
});
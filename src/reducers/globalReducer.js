const initialState = {
  showSideNav: false,
  showSearchModal: false,
  searchInputValue: "",
  geocodedStart: {},
  geocodedEnd: {},
  geocodedCompany: {},
  areAddressFieldsValid: false,
  userInfo: {}
};

export const globalReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case "TOGGLE_SIDE_NAV":
      if (action.payload.toggle) {
        newState.showSideNav = action.payload.toggle;
      } else {
        newState.showSideNav = !newState.showSideNav;
      }
      return newState;
    case "TOGGLE_SEARCH_MODAL":
      if (action.payload.toggle) {
        newState.showSearchModal = action.payload.toggle;
      } else {
        newState.showSearchModal = !newState.showSearchModal;
      }
      return newState;
    case "ON_CHANGE_SEARCH_INPUT":
      newState.searchInputValue = action.payload.value;
      return newState;
    case "SET_USER_INFO":
      newState.userInfo = action.payload;
      return newState;
    case "SET_ADDRESS":
      const geocodedLocation = action.payload.response.geocoded_address;
      if (action.payload.position === 'start') {
        newState.geocodedStart = geocodedLocation;
      } else if (action.payload.position === 'end') {
        newState.geocodedEnd = geocodedLocation;
      }else if (action.payload.position === 'company') {
        newState.geocodedCompany = geocodedLocation;
      }
      return newState;
    case "SET_INVALID_ADDRESS":
    if (action.payload.position === 'start') {
      newState.geocodedStart = false;
    } else if (action.payload.position === 'end') {
      newState.geocodedEnd = false;
    } else if (action.payload.position === 'company') {
      newState.geocodedCompany = false;
    }
    return newState;
    default:
      return newState;
  }
};

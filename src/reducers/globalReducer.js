const initialState = {
  showSideNav: false,
  showSearchModal: false,
  searchInputValue: ""
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
    default:
      return newState;
  }
};

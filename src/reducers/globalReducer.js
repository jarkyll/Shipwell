const initialState = {
  showSideNav: false
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
      return newState
     default:
      return newState;
  }
}
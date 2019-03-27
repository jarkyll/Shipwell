export const TOGGLE_SIDE_NAV = toggle => ({
  type: "TOGGLE_SIDE_NAV",
  payload: {
    toggle
  }
});

export const TOGGLE_SEARCH_MODAL = toggle => ({
  type: "TOGGLE_SEARCH_MODAL",
  payload: {
    toggle
  }
});

export const ON_CHANGE_SEARCH_INPUT = value => ({
  type: "ON_CHANGE_SEARCH_INPUT",
  payload: {
    value
  }
});
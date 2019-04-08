import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";


const NavBar = props => {
  return (
    <div id="test">
      <nav
        className="uk-navbar-container uk-margin uk-margin-remove-top test"
        uk-navbar="true"
      >

        <div className="uk-navbar-right test">
          <div className="uk-navbar-item">
            <button
              disabled={window.location.pathname !== '/maps'}
              className="uk-icon uk-navbar-toggle"
              uk-icon="icon: reply; ratio: 1.25"
              onClick={() => {props.history.goBack()}}
            />
          </div>
        </div>
        {/* <SearchModal /> */}
      </nav>
    </div>
  );
};

const mapStateToProps = (state, props) => {};

const mapDispatchToProps = (dispatch, props) => ({
  toggleSideNav: () => dispatch(TOGGLE_SIDE_NAV()),
  toggleSearchModal: () => dispatch(TOGGLE_SEARCH_MODAL())
});

export default withRouter(NavBar);

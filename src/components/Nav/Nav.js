import React from "react";
import { connect } from "react-redux";
import { TOGGLE_SIDE_NAV, TOGGLE_SEARCH_MODAL } from "../../actions/actions";
import banner from "public/imgs/banner.png";
import SearchModal from "../SearchModal/SearchModal";

const NavBar = props => {
  const { toggleSideNav, toggleSearchModal } = props;

  return (
    <nav className="uk-navbar-container uk-margin uk-margin-remove-top" uk-navbar="true">
      <div className="uk-navbar-left">
        <button
          className="uk-navbar-toggle uk-icon"
          uk-icon="more"
          onClick={toggleSideNav}
        />
      </div>

      <div className="uk-navbar-right">
        <div className="uk-navbar-item">
          <button
            className="uk-icon uk-navbar-toggle"
            uk-icon="search"
            onClick={toggleSearchModal}
          />
        </div>
      </div>
      {/* <SearchModal /> */}
    </nav>
  );
};

const mapStateToProps = (state, props) => {};

const mapDispatchToProps = (dispatch, props) => ({
  toggleSideNav: () => dispatch(TOGGLE_SIDE_NAV()),
  toggleSearchModal: () => dispatch(TOGGLE_SEARCH_MODAL())
});

export default connect(
  null,
  mapDispatchToProps
)(NavBar);

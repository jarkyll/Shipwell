import React from "react";
import { connect } from "react-redux";
import { TOGGLE_SIDE_NAV } from "../../actions/actions";
import banner from "public/imgs/banner.png";

const NavBar = props => {
  const { toggleSideNav } = props;

  return (
    <nav className="uk-navbar-container uk-margin" uk-navbar="true">
      <div className="uk-navbar-left">
        <a className="uk-navbar-toggle" onClick={toggleSideNav}>
          <span uk-icon="more" />
        </a>
      </div>


      <div className="uk-navbar-right">
        <div className="uk-navbar-item">
          <input class="uk-input" type="text" placeholder="Input" />
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state, props) => {};

const mapDispatchToProps = (dispatch, props) => ({
  toggleSideNav: () => dispatch(TOGGLE_SIDE_NAV())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

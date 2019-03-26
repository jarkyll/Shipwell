import React from "react";
import { connect } from "react-redux";
import className from "classnames";
import { TOGGLE_SIDE_NAV } from "../../actions/actions";
import { CSSTransition } from "react-transition-group";
import logo from "public/imgs/logo_transparent.png";

const SideNav = props => {
  const { showSideNav, toggleSideNav } = props;

  return (
    <div
      className={className("uk-offcanvas", {
        "uk-open": showSideNav
      })}
    >
      <CSSTransition
        in={showSideNav}
        timeout={300}
        classNames={{
          enter: "uk-offcanvas-bar-animation uk-offcanvas-slide",
          exit: "uk-offcanvas-bar-animation uk-offcanvas-slide"
        }}
      >
        <div className={className("uk-offcanvas-bar", { "": showSideNav })}>
          <button
            className="uk-offcanvas-close uk-icon uk-close"
            uk-icon="close"
            type="button"
            onClick={toggleSideNav}
          />

          <img src={logo} alt="logo" />

          <ul className="uk-nav uk-nav-default uk-nav-center uk-nav-primary">
            <li className="uk-slidenav-container uk-flex-middle uk-flex-around"> 
              <a
                className="uk-icon "
                uk-icon="chevron-left"
                type="button"
              />
              <span className="uk-active ">Active</span>
              <a
                className="uk-icon "
                uk-icon="chevron-right"
                type="button"
              />
            </li>

            <li className="uk-nav-divider" />
            <li className="uk-parent">
              <a href="#">Parent</a>
            </li>
            <li className="uk-nav-header">Header</li>
            <li className="uk-nav-divider" />
            <li>
              <a href="#">
                <span className="uk-margin-small-right" uk-icon="icon: trash" />{" "}
                Item
              </a>
            </li>
          </ul>
        </div>
      </CSSTransition>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    showSideNav: state.global.showSideNav
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    toggleSideNav: () => dispatch(TOGGLE_SIDE_NAV())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNav);

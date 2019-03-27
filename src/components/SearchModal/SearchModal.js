import React from "react";
import { connect } from "react-redux";
import { TOGGLE_SEARCH_MODAL } from "../../actions/actions";
import classNames from "classnames";

const SearchModal = props => {
  const { toggleSearchModal, showSearchModal } = props;
  console.log(props);
  return (
    <div
      id="my-id"
      class={classNames("uk-modal-full uk-open uk-display-block", {
        "uk-open": showSearchModal
      })}
      uk-modal="true"
    >
      <div class="uk-modal-dialog uk-height-1-1 uk-flex uk-flex-middle">
        <button
          class="uk-modal-close-full uk-close-large"
          type="button"
          uk-close="true"
          onClick={toggleSearchModal}
        />
        <div class="uk-flex-1">
          <div id="search-bar-container">
            <h3>Search for shit</h3>
            <input
              spellcheck="false"
              placeholder="Search to Listen"
              tabindex="1"
              autofocus
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    toggleSearchModal: () => dispatch(TOGGLE_SEARCH_MODAL())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchModal);

import React from "react";
import { connect } from "react-redux";
import { TOGGLE_SEARCH_MODAL, ON_CHANGE_SEARCH_INPUT } from "../../actions/actions";
import classNames from "classnames";


const SearchModal = props => {
  const { toggleSearchModal, showSearchModal, searchInputValue, onChangeSearchInput } = props;
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
          tabIndex="0"
          onClick={toggleSearchModal}
        />
        <div class="uk-flex-1">
          <div id="search-bar-container">
            <h3>Search for stocks, crypto, etc</h3>
            <input
              spellcheck="false"
              placeholder="Search ..."
              tabindex="1"
              autoFocus
              value={searchInputValue}
              onChange={onChangeSearchInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const { global : { searchInputValue } } = state; 
  return {
    searchInputValue
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    toggleSearchModal: () => dispatch(TOGGLE_SEARCH_MODAL()),
    onChangeSearchInput: (e) => dispatch(ON_CHANGE_SEARCH_INPUT(e.target.value)) 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchModal);

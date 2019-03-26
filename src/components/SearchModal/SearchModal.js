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
      class={classNames("uk-modal-full uk-open uk-display-block", { "uk-open": showSearchModal })}
      uk-modal="true"
    >
      <div class="uk-modal-dialog">
        <button
          class="uk-modal-close-full uk-close-large"
          type="button"
          uk-close="true"
          onClick={toggleSearchModal}
        />
        <div
          class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle"
          uk-grid="true"
        >
          <div
            class="uk-background-cover"
            uk-height-viewport="true"
          />
          <div class="uk-padding-large">
            <h1>Headline</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
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

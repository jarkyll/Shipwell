import React from "react";
import { connect } from "react-redux";
import { GET_USER_INFO_API, VALIDATE_ADDRESS_API } from "src/actions/actions";
import classNames from "classnames";

class Home extends React.Component {
  constructor(props) {
    super(props);
    props.fetchUserInfo();
    this.state = {
      startingPoint: "",
      endingPoint: "",
      startingNeedsValidation: true,
      endingNeedsValidation: true
    };
  }

  areAddressesValid = () => {
    const isValid =
      this.isFromFieldValid() &&
      this.isToFieldValid() &&
      (!this.state.startingNeedsValidation &&
        !this.state.endingNeedsValidation);
    return isValid;
  };

  isFromFieldValid = () => {
    return this.props.isStartValid && this.props.isStartValid !== {} && !this.state.startingNeedsValidation;
  }

  isToFieldValid = () => {
    return this.props.isEndValid && this.props.isEndValid !== {} && !this.state.endingNeedsValidation
  }

  onChangeStartingInput = e => {
    this.setState({
      startingPoint: e.target.value,
      startingNeedsValidation: true
    });
  };

  onChangeEndingInput = e => {
    this.setState({
      endingPoint: e.target.value,
      endingNeedsValidation: true
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isStartValid !== this.props.isStartValid) {
      this.setState({
        startingNeedsValidation: false,
        startingPoint: !nextProps.isStartValid ? this.state.startingPoint : nextProps.isStartValid.formatted_address
      });
    } else if (nextProps.isEndValid !== this.props.isEndValid) {
      this.setState({
        endingNeedsValidation: false,
        endingPoint: !nextProps.isEndValid ? this.state.endingPoint : nextProps.isEndValid.formatted_address
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="uk-child-width-expand@s uk-text-center uk-grid"
          uk-grid="true"
        >
          <div className="uk-width-1-1 uk-width-1-1@s uk-width-1-2@m uk-width-1-2@l uk-width-1-2@xl">
            <div className="uk-margin">
              <input
                spellCheck="false"
                placeholder="From ..."
                tabIndex="1"
                className={classNames("uk-input", {
                  "uk-form-danger": !this.props.isStartValid,
                  "uk-form-success":
                    this.isFromFieldValid()
                })}
                type="text"
                autoFocus
                value={this.state.startingPoint}
                onChange={this.onChangeStartingInput}
                onBlur={() =>
                  this.props.validateAddress(this.state.startingPoint, "start")
                }
              />
            </div>
          </div>
          <div className="uk-width-1-1 uk-width-1-1@s uk-width-1-2@m uk-width-1-2@l uk-width-1-2@xl">
            <div className="uk-margin">
              <input
                spellCheck="false"
                placeholder="To ..."
                tabIndex="2"
                className={classNames("uk-input", {
                  "uk-form-danger": !this.props.isEndValid,
                  "uk-form-success":
                    this.isToFieldValid()
                })}
                type="text"
                value={this.state.endingPoint}
                placeholder="To ..."
                onChange={this.onChangeEndingInput}
                onBlur={() =>
                  this.props.validateAddress(this.state.endingPoint, "end")
                }
              />
            </div>
          </div>
          <div className="uk-width-1-1">
            <div className="uk-margin">
              <button
                className="uk-button uk-button-default"
                disabled={!this.areAddressesValid()}
                onClick={() => this.props.history.push('/maps')}
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state, props) => {
  const global = state.global;
  return {
    isStartValid: global.geocodedStart,
    isEndValid: global.geocodedEnd
  };
};

const mapDispatchtoProps = dispatch => ({
  fetchUserInfo: () => dispatch(GET_USER_INFO_API()),
  validateAddress: (address, position) =>
    dispatch(VALIDATE_ADDRESS_API(address, position))
});

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Home);

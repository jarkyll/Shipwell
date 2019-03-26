import React from "react";
import Axios from "axios";

const Home = () => {
  // Axios.get('https://sandbox.iexapis.com/beta/ref-data/symbols?token=Tpk_f01a5b9dc7654140b8086f22193ed178').then((resp) => {
  //   console.log(resp);
  // }).catch((err) => {
  //   console.log(err);
  // })
  const stuff = [
    {
      symbol: "A",
      exchange: "NYS",
      name: "Agilent Technologies Inc.",
      date: "2019-03-24",
      type: "cs",
      iexId: "IEX_46574843354B2D52",
      region: "US",
      currency: "USD",
      isEnabled: true
    },
    {
      symbol: "AA",
      exchange: "NYS",
      name: "Alcoa Corp.",
      date: "2019-03-24",
      type: "cs",
      iexId: "IEX_4238333734532D52",
      region: "US",
      currency: "USD",
      isEnabled: true
    },
    {
      symbol: "AAAU",
      exchange: "PSE",
      name: "Perth Mint Physical Gold ETF",
      date: "2019-03-24",
      type: "et",
      iexId: "IEX_474B433136332D52",
      region: "US",
      currency: "USD",
      isEnabled: true
    },
    {
      symbol: "AABA",
      exchange: "NAS",
      name: "Altaba Inc.",
      date: "2019-03-24",
      type: "cef",
      iexId: "IEX_4E5434354A302D52",
      region: "US",
      currency: "USD",
      isEnabled: true
    },
    {
      symbol: "AAC",
      exchange: "NYS",
      name: "AAC Holdings Inc.",
      date: "2019-03-24",
      type: "cs",
      iexId: "IEX_4843364642592D52",
      region: "US",
      currency: "USD",
      isEnabled: true
    },
    {
      symbol: "AADR",
      exchange: "PSE",
      name: "AdvisorShares Dorsey Wright ADR ETF",
      date: "2019-03-24",
      type: "et",
      iexId: "IEX_5253355435362D52",
      region: "US",
      currency: "USD",
      isEnabled: true
    }
  ];

  return (
    <React.Fragment>
      <div
        className="uk-child-width-expand@s uk-text-center uk-grid"
        uk-grid="true"
      >
        {stuff.map((value, key) => {
          return (
            <div className="uk-width-1-1 uk-width-1-1@s uk-width-1-3@m uk-width-1-4@l uk-width-1-5@xl">
              <div className="uk-card uk-card-default uk-card-hover uk-transition-toggle" style={{cursor: "pointer"}}>
                <div className="uk-card-body uk-flex uk-flex-center uk-flex-middle">
                  <div className="uk-text-large">{value.symbol}</div>
                  <div
                    className="uk-inline-clip uk-light uk-position-absolute"
                    tabindex="0"
                  >
                    <span
                      className="uk-transition-fade"
                      uk-icon="icon: more; ratio: 2"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="uk-width-1-1 uk-width-1-1@s uk-width-1-3@m uk-width-1-4@l uk-width-1-5@xl">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </div>
        <div className="uk-width-1-1 uk-width-1-1@s uk-width-1-3@m uk-width-1-4@l uk-width-1-5@xl">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </div>
        <div className="uk-width-1-1 uk-width-1-1@s uk-width-1-3@m uk-width-1-4@l uk-width-1-5@xl">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </div>
        <div className="uk-width-1-1 uk-width-1-1@s uk-width-1-3@m uk-width-1-4@l uk-width-1-5@xl">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </div>
        <div className="uk-width-1-1 uk-width-1-1@s uk-width-1-3@m uk-width-1-4@l uk-width-1-5@xl">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </div>
        <div className="uk-width-1-1 uk-width-1-1@s uk-width-1-3@m uk-width-1-4@l uk-width-1-5@xl">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </div>

        <div className="uk-width-1-1 uk-position-bottom">
          <button className="bx--btn bx--btn--primary" type="button">
            Footer
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;

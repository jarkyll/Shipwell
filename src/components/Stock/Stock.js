import React from "react";
import className from "classnames";
import { Line } from "react-chartjs-2";
import stuff from "../../../intraday.json";

const tableData = stuff.data;

const finalData = (info => {
  let labelList = [];
  let dataList = [];
  tableData.map((key, value) => {
    let info = {
      marketAverage: key.marketAverage,
      time: key.minute
    };
    labelList.push(key.minute);
    dataList.push(key.marketAverage);
  });
  return {
    labelList,
    dataList
  };
})(tableData);

const test = {
  data: {
    symbol: "AAPL",
    companyName: "Apple, Inc.",
    calculationPrice: "close",
    open: 191.54,
    openTime: 1553520601056,
    close: 188.74,
    closeTime: 1553544000372,
    high: 191.98,
    low: 186.6,
    latestPrice: 188.74,
    latestSource: "Close",
    latestTime: "March 25, 2019",
    latestUpdate: 1553544000372,
    latestVolume: 43742171,
    iexRealtimePrice: 188.77,
    iexRealtimeSize: 100,
    iexLastUpdated: 1553543997707,
    delayedPrice: 188.74,
    delayedPriceTime: 1553544000372,
    extendedPrice: 189.25,
    extendedChange: 0.51,
    extendedChangePercent: 0.0027,
    extendedPriceTime: 1553552031731,
    previousClose: 191.05,
    change: -2.31,
    changePercent: -0.01209,
    iexMarketPercent: 0.025712281175984612,
    iexVolume: 1124711,
    avgTotalVolume: 26514563,
    iexBidPrice: 0,
    iexBidSize: 0,
    iexAskPrice: 0,
    iexAskSize: 0,
    marketCap: 889961947200,
    peRatio: 15.38,
    week52High: 233.47,
    week52Low: 142,
    ytdChange: 0.19770000000000001
  }
};

const isStockPositive = change => {
  return change > 0;
};

const chartstuff = {
  labels: finalData.labelList,
  datasets: [
    {
      label: "$",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgb(51,79,123)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: finalData.dataList
    }
  ]
};

const Stock = props => {
  const { data } = test;
  const isPositive = isStockPositive(data.change);
  const listData = [
    "peRatio",
    // "marketCap",
    "high",
    "low",
    "open",
    "close"
    // "latestSource",
    // "previousClose",
    // "avgTotalVolume"
  ];
  return (
    <React.Fragment>
      <div className="uk-grid-small" uk-grid="true">
        <div className="uk-width-1-1 uk-width-1-1@s uk-width-3-5@m">
          <div className="uk-card uk-card-default uk-card-body">
            <h1 className="uk-heading-line uk-margin-remove-bottom">
              {data.symbol}
            </h1>
            <h2 className="uk-heading-divider uk-margin-remove-top">
              {data.companyName}
            </h2>
            <div className="uk-flex-inline uk-flex-wrap uk-width-1-1 uk-flex-around">
              <h1 className="uk-margin-remove uk-text-truncate">Latest Source: {data.latestSource}</h1>
              <h1 className="uk-text-right uk-heading-primary uk-margin-remove">
                <sup>$</sup>
                {data.latestPrice}
                <h4
                  className={className("uk-text-right uk-margin-remove-top", {
                    "uk-text-success": isPositive,
                    "uk-text-danger": !isPositive
                  })}
                >
                  {data.change} {data.changePercent}%
                </h4>
              </h1>
            </div>
          </div>
        </div>
        <div className="uk-width-1-1 uk-width-1-1@s uk-width-2-5@m">
          <div className="uk-card uk-card-default uk-card-body">
            <h1 className="uk-heading-divider">Data</h1>
            <div className="uk-flex uk-flex-wrap uk-flex-around">
              <ul className="uk-list uk-list-large">
                {listData.map((value, key) => (
                  <li>
                    <span className="uk-text-left">{value}:</span>
                    <span className="uk-text-right">
                      &nbsp;
                      {data[value]}
                    </span>
                  </li>
                ))}
              </ul>

              <ul className="uk-list uk-list-large uk-margin-remove-top">
                {listData.map((value, key) => (
                  <li>
                    <span className="uk-text-left">{value}:</span>
                    <span className="uk-text-right">
                      &nbsp;
                      {data[value]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="uk-width-1-1 uk-width-1-1@s uk-width-1-2@m">
          <div className="uk-card uk-card-default uk-card-body">
            <h1 className="uk-heading-divider uk-margin-remove-top">Chart</h1>
            <Line
              data={chartstuff}
              options={{
                legend: {
                  display: false
                }
              }}
            />
          </div>
        </div>
        <div className="uk-width-1-1 uk-width-1-1@s uk-width-1-2@m">
          <div className="uk-card uk-card-default uk-card-body uk-margin-remove-top">
            <h1 className="uk-heading-divider">News</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Stock;

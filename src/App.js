import "./App.css";
import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import Footer from "./components/Footer/Footer";

function App() {
  let [cryptoData, setCryptoData] = useState([]);
  let [coinData, setCoinData] = useState([]);

  const API_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const dates = [
    "01-01-2021",
    "01-06-2021",
    "01-01-2022",
    "01-06-2022",
    "01-01-2023",
  ];

  const COIN_API =
    "https://api.coingecko.com/api/v3/coins/bitcoin/history?date=" + dates[2];

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setCryptoData(data));
  }, []);

  return (
    <div className="App">
      <h1 className="test">Fun Crypto Tracking Terminal</h1>
      <h4 className="test">
        Track popular coins, and analyze price changes with ease
      </h4>
      <table id="table" className="tableClass">
        <tr>
          <th style={{ margin: "10px" }}></th>
          <th style={{ margin: "10px" }}></th>
          <th style={{ margin: "10px" }}>Name</th>
          <th style={{ margin: "10px" }}>Price</th>
          <th style={{ margin: "10px" }}>Change (24H) </th>
          <th style={{ padding: "20px", margin: "10px" }} class="optional">
            Market Cap
          </th>
        </tr>

        {/* <div id="data"> */}
        {cryptoData.map((data) => (
          <tr>
            <th>{data.market_cap_rank}</th>
            <th>
              <img className="table-image" src={data.image} alt={uuid()} />
            </th>
            <th>{data.name}</th>
            <th>${data.current_price}</th>

            {data.price_change_percentage_24h < 0 && (
              <th style={{ color: "red", border: "none" }}>
                {data.price_change_percentage_24h}%
              </th>
            )}
            {data.price_change_percentage_24h > 0 && (
              <th style={{ color: "green", border: "none" }}>
                {data.price_change_percentage_24h}%
              </th>
            )}

            <th class="optional" style={{ padding: "20px", fontSize: "12px " }}>
              ${data.market_cap}
            </th>
          </tr>
        ))}
        {/* </div> */}
      </table>

      <Footer />
    </div>
  );
}

export default App;

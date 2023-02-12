import "./App.css";
// import $ from "jquery";
import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
function App() {
  let [cryptoData, setCryptoData] = useState([]);

  const API_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

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

      {/* <div className="card-deck">
        {cryptoData.slice(0, 3).map((data) => {
          return (
            <Card
              title={data.name}
              price={data.current_price}
              image={data.image}
            />
          );
        })}
      </div> */}
      {/* 
      <div className="card-deck">
        {cryptoData.slice(3, 6).map((data) => {
          return (
            <Card
              title={data.name}
              price={data.current_price}
              image={data.image}
            />
          );
        })}
      </div> */}
      <table id="table" class="tableClass">
        <tr>
          <th style={{ margin: "10px" }}></th>
          <th style={{ margin: "10px" }}></th>
          <th style={{ margin: "10px" }}>Name</th>
          <th style={{ margin: "10px" }}>Price</th>
          <th style={{ margin: "10px" }}>Change (24H) </th>
          <th style={{ padding: "20px", margin: "10px" }}>Market Cap</th>
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
            <th style={{ padding: "20px" }}>
              {data.price_change_percentage_24h}%
            </th>
            <th style={{ padding: "20px", fontSize: "12px " }}>
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

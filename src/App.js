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
      <h1 className="test">Crypto Tracker</h1>

      <div className="card-deck">
        {cryptoData.slice(0, 3).map((data) => {
          return (
            <Card
              title={data.name}
              price={data.current_price}
              image={data.image}
            />
          );
        })}
      </div>

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
      </div>

      <div id="data">
        {cryptoData.map((data) => (
          <button className="crypto" key={uuid()}>
            <img className="table-image" src={data.image} alt={uuid()} />
            <p className="name">{data.name}</p>
            <p className="price">$ {data.current_price} USD</p>
          </button>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;

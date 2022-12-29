import React from "react";
import "./Card.css";
import uuid from "react-uuid";
function Card(props) {
  return (
    <div className="card">
      <h2 className="card-title">{props.title}</h2>
      <img className="card-image" src={props.image} alt={uuid()} />
      <p className="card-text">
        <span className="dolar-sign">$</span>
        {props.price}
      </p>
    </div>
  );
}

export default Card;

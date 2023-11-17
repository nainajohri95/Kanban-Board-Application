import React from "react";
import "./Card.css";

function Card({ id, title }) {
  return (
    <div className="card">
      <div className="card_top">
        <p className="card_id">{id}</p>
        {/* Other content in card_top if needed */}
      </div>
      <p className="card_title">{title}</p>
      <div className="card_labels"></div>
    </div>
  );
}

export default Card;

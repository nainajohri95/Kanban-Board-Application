import React from "react";
import "./Card.css";
import { IoIosMore } from "react-icons/io";

function Card({ id, title }) {
  return (
    <div className="card">
      <div className="card_top">
        <p className="card_id">{id}</p>
        {/* Other content in card_top if needed */}
      </div>
      <p className="card_title">Title</p>
      <div className="card_labels"></div>
      <div className="card_footer">
        <p>
          <IoIosMore />
          <p>Feature Request</p>
        </p>
      </div>
    </div>
  );
}

export default Card;

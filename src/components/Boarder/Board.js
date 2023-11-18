import React from "react";
import "./Board.css";
import Card from "../Card/Card";
import { IoIosMore } from "react-icons/io";
import { GoPlus } from "react-icons/go";

function Board() {
  return (
    <div className="board">
      <div className="board_top">
        <p className="board_top_title">
          To Do
          <span>2</span>
        </p>
        <p>
          <GoPlus />
          <IoIosMore />
        </p>
      </div>
      <div className="board_cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Board;

import React from "react";
import "./Board.css";
import { MoreHorizontal, Plus } from "react-feather";
import { Card } from "@mui/material";
function Board() {
  return (
    <div className="board">
      <div className="board_top">
        <p className="board_top_title">
          To Do
          <span>2</span>
        </p>
        <Plus />
        <MoreHorizontal />
      </div>
      <div className="board_cards">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Board;

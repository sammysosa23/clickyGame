import React from "react";
import "./ScoreBoard.css";

const ScoreBoard = props => (
  <div className="score-board text-center">
    <h3 className="score">Score: {props.score}</h3>
  </div>
);

export default ScoreBoard;
import React from "react";

import "./WordsComponent.css";

const WordsComponent = ({ randomWords }) => {
  return (
    <div>
      <div className="board">
        <p className="left">{randomWords[0]}</p>
        <p className="middle">{randomWords[1]}</p>
        <p className="right">{randomWords[2]}</p>
      </div>
    </div>
  );
};

export default WordsComponent;

import React from "react";

function Score({ score, timeLeft }) {
  return (
    <div className="score">
      <div>Time Left: {timeLeft}</div>
      <div>Score: {score}</div>
    </div>
  );
}

export default Score;

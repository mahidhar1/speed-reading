import React, { useState, useEffect, useContext } from "react";
import Score from "./Score";

import GameContextProvider, { GameContext } from "../../contexts/GameContext";

const gameTime = 60;

const Game = ({ children }) => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(gameTime);
  const [isTimeRunning, setIsTimeRunning] = useState(false);

  useEffect(() => {
    if (timeLeft < 0) {
      setTimeLeft(0);
      endGame();
    }

    if (isTimeRunning && timeLeft > 0) {
      setTimeout(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      endGame();
    }
  }, [timeLeft, setTimeLeft, isTimeRunning]);

  const startGame = () => {
    setTimeLeft(gameTime);
    setScore(0);
    setIsTimeRunning(true);
  };

  const endGame = () => {
    setIsTimeRunning(false);
  };

  return (
    <div>
      <Score score={score} timeLeft={timeLeft} />

      {isTimeRunning ? (
        <div>{({ score, setScore }) => children(score, setScore)}</div>
      ) : (
        <button onClick={startGame} className="start-btn">
          Start
        </button>
      )}
    </div>
  );
};

export default Game;

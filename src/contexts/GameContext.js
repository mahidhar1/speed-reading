import { useState, createContext } from "react";

export const GameContext = createContext();

const gameTime = 20;

const GameContextProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(gameTime);

  return (
    <GameContext.Provider value={{ score, setScore, timeLeft, setTimeLeft }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;

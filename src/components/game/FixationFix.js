import { Score } from "../../components/common";

import { useState, useEffect } from "react";

import { getRandomWords } from "../../utils/index";

const gameTime = 5;

function FixationFix() {
  /*
  const [score, setScore] = useState(0);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(gameTime);
  

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
  }, [timeLeft, isTimeRunning]);

  const startGame = () => {
    setTimeLeft(gameTime);
    setScore(0);
    setIsTimeRunning(true);
  };

  const endGame = () => {
    setIsTimeRunning(false);
  };*/

  /*const [qnA, setQnA] = useState({
    question: ["to", "to", "to"],
    answer: true,
  });*/

  /*const checkAnswer = (userAnswer) => {
    if (userAnswer === qnA["answer"]) {
      setScore((score) => score + 1);
    } else {
      setTimeLeft((timeLeft) => timeLeft - 10);
    }
    setQnA((qnA) => getRandomWords());
  };*/

  return (
    <div className="App">
      {/*isTimeRunning ? (
        <WordsComponent randomWords={qnA["question"]} />
      ) : (
        <WordsComponent randomWords={["", "Game Over", ""]} />
      )}

      {isTimeRunning ? (
        <Buttons>
          <button onClick={() => checkAnswer(true)} className="green-btn">
            Identical
          </button>
          <button onClick={() => checkAnswer(false)} className="red-btn">
            Not Identical
          </button>
        </Buttons>
      ) : (
        <Buttons>
          <button onClick={startGame} className="start-btn">
            Start
          </button>
        </Buttons>
      )*/}
    </div>
  );
}

export default FixationFix;

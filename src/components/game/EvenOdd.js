import React, { useState, useEffect, useContext } from "react";
import { Game } from "../common";
import { GameContext } from "../../contexts/GameContext";
import { Card } from "@material-ui/core";

import { shuffle } from "../../utils";

const gameTime = 60;

function getRandomNumbers(n) {
  let arr = { odd: [], even: [] };
  for (let i = 0; i < n; i++) {
    let number = Math.floor(10000 * Math.random());
    if (number % 2 === 0) {
      arr["even"].push(number);
    } else {
      arr["odd"].push(number);
    }
  }

  return arr;
}

const EvenOdd = () => {
  //const { setScore } = useContext(GameContext);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(gameTime);
  const [question, setQuestion] = useState("odd");
  const [numbers, setNumbers] = useState([]);
  const [numbersRemaining, setNumbersRemaining] = useState(0);

  useEffect(() => {
    if (timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((timeRemaining) => timeRemaining - 1);
      }, 1000);
    }
  }, [timeRemaining]);

  useEffect(() => {
    const numObj = getRandomNumbers(10);
    const numbers = shuffle([...numObj["even"], ...numObj["odd"]]);
    setNumbers(numbers);
    setNumbersRemaining(numObj[question].length);
  }, [question]);

  useEffect(() => {
    if (numbersRemaining === 0) {
      setQuestion((question) => (question === "odd" ? "even" : "odd"));
    }
  }, [numbersRemaining]);

  const checkAnswer = (e) => {
    if (Number(e.target.innerText) % 2 === 0 && question === "even") {
      setScore((score) => score + 1);
      //e.target.style.color = "#FFF";
      e.target.style.opacity = 0;
      setNumbersRemaining((numbersRemaining) => numbersRemaining - 1);
    } else if (Number(e.target.innerText) % 2 !== 0 && question === "odd") {
      //e.target.style.color = "#FFF";
      e.target.style.opacity = 0;
      setScore((score) => score + 1);
      setNumbersRemaining((numbersRemaining) => numbersRemaining - 1);
    }
  };

  return (
    <Card>
      <div className="score">
        <div>Time Left: {timeRemaining}</div>
        <div>Score: {score}</div>
      </div>

      {timeRemaining > 0 && (
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h1>{question}</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {numbersRemaining > 0 &&
              numbers.map((num, i) => (
                <div key={i} style={{ display: "block", margin: "10px" }}>
                  <div onClick={(e) => checkAnswer(e)}>{num}</div>
                </div>
              ))}
          </div>
        </div>
      )}

      {timeRemaining === 0 && (
        <div style={{ textAlign: "center" }}>
          <h1>Good Job</h1>
          <h3>You scored {score} </h3>
        </div>
      )}
    </Card>
  );
};

export default EvenOdd;

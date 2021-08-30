import React, { useState, useEffect } from "react";
import { shuffle } from "../../utils";

import { Card } from "@material-ui/core";

let numbers = [...Array(100).keys()].map((num) => num + 1);
//numbers = shuffle(numbers);

const getRandomIndex = (availableNumbers) => {
  const index = Math.floor(availableNumbers.length * Math.random());
  return index;
};

const firstIndex = getRandomIndex(numbers);
const firstNumber = numbers[firstIndex];

function ScuttleTableNumbers() {
  const [timeTaken, setTimeTaken] = useState(0);
  const [question, setQuestion] = useState(firstNumber);
  const [availableNumbers, setAvailableNumbers] = useState([...numbers]);

  useEffect(() => {
    if (availableNumbers.length > 0) {
      setTimeout(() => {
        setTimeTaken((timeTaken) => timeTaken + 1);
      }, 1000);
    }
  }, [timeTaken, availableNumbers]);
  const checkAnswer = (e) => {
    if (Number(e.target.innerText) === question) {
      e.target.style.opacity = 0;
      let index = availableNumbers.indexOf(question);
      availableNumbers.splice(index, 1);
      setAvailableNumbers(availableNumbers);
      setQuestion(availableNumbers[getRandomIndex(availableNumbers)]);
    }
  };

  return (
    <Card>
      <div className="score">
        <div>Time Taken: {timeTaken}</div>
      </div>
      {availableNumbers.length > 0 && (
        <div style={{ textAlign: "center" }}>
          <h1>{question}</h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
            }}
          >
            {numbers.map((el, i) => (
              <div
                key={i}
                onClick={(e) => checkAnswer(e)}
                style={{
                  fontSize: "1.5em",
                  //border: "2px solid black",
                  margin: "0.1em",
                }}
              >
                {el}
              </div>
            ))}
          </div>
        </div>
      )}

      {availableNumbers.length === 0 && (
        <div style={{ textAlign: "center" }}>
          <h1>Good Job</h1>
          <h3>You took {timeTaken} seconds</h3>
        </div>
      )}

      <div style={{ textAlign: "center", display: "none" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
            background: "red",
          }}
        >
          {availableNumbers.map((el) => (
            <div key={el}>{el}</div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default ScuttleTableNumbers;

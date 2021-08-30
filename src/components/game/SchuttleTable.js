import React, { useState, useEffect } from "react";
import { shuffle } from "../../utils";

import { Card } from "@material-ui/core";
import "./style.css";

let numbers = [...Array(100).keys()].map((num) => num + 1);
numbers = shuffle(numbers);

function ScuttleTableNumbers() {
  const [timeTaken, setTimeTaken] = useState(0);
  const [question, setQuestion] = useState(1);
  const [availableNumbers, setAvailableNumbers] = useState(
    [...Array(100).keys()].map((num) => num + 1)
  );

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
      setQuestion(availableNumbers[0]);
    } else {
      e.target.classList.add("redColorAnimation");
      setTimeout(() => e.target.classList.remove("redColorAnimation"), 1000);
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
          {/* <div style={{ textAlign: "center" }}>
            <h1 style={{ height: "1rem" }}>
              {youLostMessage !== "" && youLostMessage}
            </h1>
            <br />
          </div> */}
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
          <h3>
            You took{" "}
            {timeTaken > 60
              ? `${Math.floor(timeTaken / 60)} : ${timeTaken % 60} minutes`
              : `${timeTaken} seconds`}
          </h3>
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

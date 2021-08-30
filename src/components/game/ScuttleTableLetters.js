import React, { useState, useEffect } from "react";
import { shuffle } from "../../utils";
import { Card } from "@material-ui/core";

let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
letters = letters.map((letter) =>
  [...Array(10).keys()].map((el) => `${letter}${el + 1}`)
);

letters = letters.flat();

const getRandomIndex = (availableLetters) => {
  const index = Math.floor(availableLetters.length * Math.random());
  return index;
};

function ScuttleTableLetters() {
  const [timeTaken, setTimeTaken] = useState(0);
  const [question, setQuestion] = useState(letters[getRandomIndex(letters)]);
  const [availableLetters, setAvailableLetters] = useState([...letters]);

  useEffect(() => {
    if (availableLetters.length > 0) {
      setTimeout(() => {
        setTimeTaken((timeTaken) => timeTaken + 1);
      }, 1000);
    }
  }, [timeTaken, availableLetters]);

  const checkAnswer = (e) => {
    if (e.target.innerText === question) {
      e.target.style.opacity = 0;
      let index = availableLetters.indexOf(question);
      availableLetters.splice(index, 1);
      setAvailableLetters(availableLetters);
      setQuestion(availableLetters[getRandomIndex(availableLetters)]);
    }
  };

  return (
    <Card>
      <div className="score">
        <div>Time Taken: {timeTaken}</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <h1>{question}</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
          }}
        >
          {letters.map((el) => (
            <div
              key={el}
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
    </Card>
  );
}

export default ScuttleTableLetters;

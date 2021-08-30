import React, { useState, useEffect } from "react";
import { shuffle } from "../../utils";
import { Card } from "@material-ui/core";
import "./style.css";

const para =
  "Speed reading is the art of silencing subvocalization. Most readers have an average reading speed of 200 wpm, which is about as fast as they can read a passage out loud. This is no coincidence. It is their inner voice that paces through the text that keeps them from achieving higher reading speeds. They can only read as fast as they can speak because that's the way they were taught to read, through reading systems like Hooked on Phonics.";

const paraArr = para.split(" ");

let letters = [...new Set(paraArr)];

const getRandomIndex = (availableLetters) => {
  const index = Math.floor(availableLetters.length * Math.random());
  return index;
};

function SearchWord() {
  const [timeTaken, setTimeTaken] = useState(0);
  const [score, setScore] = useState(0);
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
      let index = availableLetters.indexOf(question);
      availableLetters.splice(index, 1);
      setAvailableLetters(availableLetters);
      setQuestion(availableLetters[getRandomIndex(availableLetters)]);
      setScore((score) => score + 1);
    } else {
      e.target.classList.add("redColorAnimation");
      setTimeout(() => e.target.classList.remove("redColorAnimation"), 1000);
    }
  };

  return (
    <Card>
      <div className="score">
        <div>Time Taken: {timeTaken}</div>
        <div>Score: {score}</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <h1>{question}</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {paraArr.map((el, i) => (
            <div
              key={i}
              onClick={(e) => checkAnswer(e)}
              style={{ margin: "0.1em" }}
            >
              {el}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default SearchWord;

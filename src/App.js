import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import {
  EvenOdd,
  FixationFix,
  FlashAnzan,
  FlashSentence,
  FlashWord,
  LineOfSight,
  ScanBoost,
  SchuttleTable,
  ScuttleTableLetters,
  ScuttleTableNumbers,
  SearchWord,
} from "./components/game";

import { Home } from "./components/common";
import "./App.css";
import GameContextProvider from "./contexts/GameContext";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/evenodd">
        <EvenOdd />
      </Route>
      <Route path="/schuttle-table">
        <SchuttleTable />
      </Route>
      <Route path="/scuttle-table-letters">
        <ScuttleTableLetters />
      </Route>
      <Route path="/scuttle-table-numbers">
        <ScuttleTableNumbers />
      </Route>
      <Route path="/search-word">
        <SearchWord />
      </Route>
    </div>
  );
}

export default App;

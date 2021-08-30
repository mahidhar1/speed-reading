import React from "react";
import { Link } from "react-router-dom";

const games = [
  { title: "Even Odd", link: "evenodd" },
  { title: "Schuttle Table", link: "schuttle-table" },
  { title: "Find the ticket", link: "scuttle-table-letters" },
  { title: "Find the number", link: "scuttle-table-numbers" },
  { title: "Search Word", link: "search-word" },
];

function Home() {
  return (
    <div classname="App">
      {games.map((game, i) => (
        <div key={i}>
          <Link to={`${game.link}`}>
            <div
              style={{
                backgroundColor: "blue",
                borderRadius: "20%",
                color: "white",
                textAlign: "center",
                margin: "1em",
                underline: "none",
              }}
            >
              {game.title}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;

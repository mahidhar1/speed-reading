import React from "react";
import "./Grid.css";

function Grid() {
  let stIndices = [...new Array(10).keys()].map((el) => 100 - 10 * el);

  return (
    <div className="board">
      {stIndices.map((stIndex, i) => {
        let arr = [...new Array(10).keys()].map((i) => stIndex - i);

        return (
          <div className="container" key={i}>
            {arr.map((el, j) => (
              <div
                className="grid-item"
                key={el}
                style={{ order: `${i % 2 === 0 ? j : 10 - j}` }}
              >
                {el}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Grid;

import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ wordList }) {

  wordList = wordList.map(word => {
    return Array.from(word, char => char);
  });

  while (wordList.length < NUM_OF_GUESSES_ALLOWED) {
    wordList.push(Array.from(Array(5), () => ""));
  }

  return (<div className="guess-results">
    {wordList.map((row, i1) => <p className="guess" key={i1.toString()}>
      {row.map((letter, i2) => <span className="cell" key={i1.toString()+i2.toString()}>{letter}</span>)}
    </p>)}
  </div>);
}

/*
{wordList.map((word, index) =>
        <p className="guess" key={index}>
          {word}
        </p>
      )}
* */
export default GuessResults;

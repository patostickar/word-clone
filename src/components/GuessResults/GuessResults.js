import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function GuessResults({ wordList, answer }) {

  console.log(wordList.at(-1));
  const checkGuessResult = checkGuess(wordList.at(-1), answer);

  const wordListChars = wordList?.map(word => Array.from(word));
  const emptyGuess = Array(5).fill("");
  while (wordListChars.length < NUM_OF_GUESSES_ALLOWED) {
    wordListChars.push(emptyGuess);
  }

  return (
    <div className="guess-results">
      {wordListChars?.map((row, i1) =>
        <p className="guess" key={i1.toString()}>
          {row?.map((letter, i2) =>
            <span className={`cell ${checkGuessResult?.[i2] ?? ""}`}
                  key={i1.toString() + i2.toString()}>{letter}
            </span>)}
        </p>)}
    </div>);
}

export default GuessResults;

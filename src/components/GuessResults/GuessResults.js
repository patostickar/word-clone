import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function GuessResults({ wordList, answer }) {
  const wordListGuess = wordList.map((word) => checkGuess(word, answer));

  const emptyGuess = Array(5).fill({ letter: "", status: "" });

  while (wordListGuess.length < NUM_OF_GUESSES_ALLOWED) {
    wordListGuess.push(emptyGuess);
  }

  return (
    <div className="guess-results">
      {wordListGuess.map((wordGuess, wordGuessIndex) => (
        <p className="guess" key={wordGuessIndex.toString()}>
          {wordGuess.map((char, charIndex) => (
            <span
              className={`cell ${char.status}`}
              key={wordGuessIndex.toString() + charIndex.toString()}
            >
              {char.letter}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;

import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import TextInput from "../TextInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [wordList, setWordList] = useState([]);
  const saveWord = (word) => {
    if (wordList.length < NUM_OF_GUESSES_ALLOWED)
      setWordList([...wordList, word]);
  };


  return (
    <>
      <GuessResults wordList={wordList} answer={answer} />
      <TextInput saveWord={saveWord} />
    </>
  );
}

export default Game;

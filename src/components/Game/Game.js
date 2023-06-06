import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import TextInput from "../TextInput";
import WordList from "../WordList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [wordList, setWordList] = useState([]);
  const saveWord = (word) =>
    setWordList([...wordList, word]);


  return (
    <>
      <WordList wordList={wordList} />
      <TextInput saveWord={saveWord} />
    </>
  );
}

export default Game;

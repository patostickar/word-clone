import React, { useState, useEffect } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import TextInput from "../TextInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [wordList, setWordList] = useState([]);
  const [gameWon, setGameWon] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  useEffect(() => {
    checkGuess(wordList.at(-1));
  }, [wordList]);

  useEffect(() => {
    checkGameEnd();
  }, [gameWon, wordList]);

  const saveWord = (word) => {
    if (wordList.length < NUM_OF_GUESSES_ALLOWED)
      setWordList([...wordList, word]);
  };

  const checkGuess = (word) => {
    if (word === answer) setGameWon(true);
  };

  const checkGameEnd = () => {
    if (gameWon || wordList.length === NUM_OF_GUESSES_ALLOWED)
      setGameFinished(true);
  };

  return (
    <>
      <GuessResults wordList={wordList} answer={answer} />
      <TextInput saveWord={saveWord} gameFinished={gameFinished} />
      <Banner gameFinished={gameFinished} gameWon={gameWon} />
    </>
  );
}

export default Game;

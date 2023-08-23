import React, { useState } from "react";

function TextInput({ saveWord, gameFinished }) {
  const [word, setWord] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (word.length === 5) {
      setWord("");
      saveWord(word);
    }
  };
  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          pattern={"^[a-zA-Z]{5,5}$"}
          value={word}
          onChange={(event) => setWord(event.target.value.toUpperCase())}
          disabled={gameFinished}
        />
      </form>
    </>
  );
}

export default TextInput;

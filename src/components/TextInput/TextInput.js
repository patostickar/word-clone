import React, { useState } from "react";

function TextInput({saveWord}) {
  const [word, setWord] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setWord("");
    saveWord(word);
  };
  return (<>
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" pattern={"[A-Za-z]{5}"} value={word} onChange={event => setWord(event.target.value.toUpperCase())} />
    </form>
  </>);
}

export default TextInput;

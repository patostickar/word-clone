import React from "react";

function WordList({ wordList }) {
  return (
    <>
      <ul>
        {wordList.map((word, index) =>
          <li key={index}>
            {word}
          </li>
        )}
      </ul>
    </>
  );
}

export default WordList;

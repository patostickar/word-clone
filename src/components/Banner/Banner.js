import React from "react";

function Banner({ gameFinished, gameWon }) {
  return (
    <>
      {gameFinished ? (
        gameWon ? (
          <div className="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in
              <strong>3 guesses</strong>.
            </p>
          </div>
        ) : (
          <div className="sad banner">
            <p>
              Sorry, the correct answer is <strong>LEARN</strong>.
            </p>
          </div>
        )
      ) : (
        <></>
      )}
    </>
  );
}

export default Banner;

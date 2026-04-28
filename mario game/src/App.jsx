import React, { useState } from "react";
import "./App.css";

function App() {

  // 🔹 state for coins
  const [coins, setCoins] = useState(0);

  // 🔹 state for mario position
  const [marioIndex, setMarioIndex] = useState(0);

  // 🔹 total boxes
  const totalBoxes = 6;

  // 🔹 handle click
  function handleClick(index) {

    // Mario ko move karo
    setMarioIndex(index);

    // Random coin milega ya nahi
    if (Math.random() > 0.5) {
      setCoins(prev => prev + 1); // prev = previous value
    }
  }

  return (
    <div className="game">

      {/* Title */}
      <h3>MARIO'S ADVENTURE</h3>

      {/* Coin Counter */}
      <div className="coin">COIN x {coins}</div>

      {/* Character */}
      <div className="character">🙂 Regular Mario</div>

      {/* Grid */}
      <div className="grid">
        {
          // array create karke map kar rahe
          Array.from({ length: totalBoxes }).map((_, i) => (
            <div
              key={i}
              className={`box ${i === marioIndex ? "mario" : ""}`}
              onClick={() => handleClick(i)}
            >
              {i === marioIndex ? "🙂" : "?"}
            </div>
          ))
        }
      </div>

      {/* Footer */}
      <div className="footer">
        <span>WORLD 0-0</span>
        <span>⭐ x 0</span>
        <span>TIME -</span>
      </div>

    </div>
  );
}

export default App;
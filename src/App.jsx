import React, { useState } from "react";
import PuzzleGame from "./components/PuzzleGame";
import FallingLogos from "./components/FallingLogos";

export default function App() {
  const [difficulty, setDifficulty] = useState(null);

  const startGame = (size) => {
    setDifficulty(size);
  };

  const backToMenu = () => {
    setDifficulty(null);
  };

  return (
    <div className="app" style={{ textAlign: "center", color: "white", minHeight: "100vh", background: "black", position: "relative" }}>
      <FallingLogos />
      {difficulty ? (
        <PuzzleGame gridSize={difficulty} onBack={backToMenu} />
      ) : (
        <div style={{ zIndex: 2, position: "relative", paddingTop: "50px" }}>
          <h1>Choose Difficulty</h1>
          <div style={{ marginTop: "20px" }}>
            <button onClick={() => startGame(2)} style={btn}>Simple (2x2)</button>
            <button onClick={() => startGame(3)} style={btn}>Intermediate (3x3)</button>
            <button onClick={() => startGame(4)} style={btn}>Hard (4x4)</button>
          </div>
          <p style={{ marginTop: "40px", fontSize: "14px" }}>Made by <a href="https://x.com/sonuwork37" target="_blank" rel="noreferrer">@sonuwork37</a></p>
        </div>
      )}
    </div>
  );
}

const btn = {
  margin: "10px",
  padding: "10px 20px",
  background: "#222",
  color: "white",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
};

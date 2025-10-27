import React, { useState, useEffect } from "react";
import { images } from "../data/images";
import "../index.css";

export default function PuzzleGame({ level, onBack }) {
  const [tiles, setTiles] = useState([]);
  const [correctTiles, setCorrectTiles] = useState([]);
  const [moves, setMoves] = useState(0);
  const [solved, setSolved] = useState(false);
  const [randomImage, setRandomImage] = useState("");

  // grid size by level
  const gridSize = level === "simple" ? 2 : level === "intermediate" ? 3 : 4;

  useEffect(() => {
    // select random image from imported list
    const img = images[Math.floor(Math.random() * images.length)];
    setRandomImage(img);

    const totalTiles = gridSize * gridSize;

    // last tile = -1 (empty space)
    const order = Array.from({ length: totalTiles - 1 }, (_, i) => i);
    order.push(-1);

    const shuffled = shuffleArray(order);
    setTiles(shuffled);
    setCorrectTiles([...order]);
  }, [level]);

  // shuffle helper
  const shuffleArray = (arr) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  // swap tiles on click
  const handleTileClick = (index) => {
    if (solved) return;
    const newTiles = [...tiles];
    const emptyIndex = newTiles.indexOf(-1);

    // valid moves for empty slot
    const validMoves = [
      emptyIndex - 1,
      emptyIndex + 1,
      emptyIndex - gridSize,
      emptyIndex + gridSize,
    ];

    if (validMoves.includes(index)) {
      [newTiles[index], newTiles[emptyIndex]] = [
        newTiles[emptyIndex],
        newTiles[index],
      ];
      setTiles(newTiles);
      setMoves((m) => m + 1);

      // check solved
      if (JSON.stringify(newTiles) === JSON.stringify(correctTiles)) {
        setSolved(true);
        setTimeout(() => {
          alert("🎉 Congratulations! You’ve unlocked the Sentient challenge!");
        }, 300);
      }
    }
  };

  // generate tile styles
  const tileSize = 400 / gridSize;
  const imageStyle = (tileIndex) => {
    const row = Math.floor(tileIndex / gridSize);
    const col = tileIndex % gridSize;
    return {
      backgroundImage: `url(${process.env.PUBLIC_URL + randomImage})`,
      backgroundSize: `${gridSize * 100}%`,
      backgroundPosition: `${(col / (gridSize - 1)) * 100}% ${(row / (gridSize - 1)) * 100}%`,
      backgroundRepeat: "no-repeat",
      border: "1px solid #111",
    };
  };

  return (
    <div
      className="puzzle-container"
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        color: "white",
        textAlign: "center",
        paddingTop: "20px",
      }}
    >
      <h2>{level.toUpperCase()} Level</h2>
      <p>Moves: {moves}</p>
      <button onClick={onBack} className="back-btn">
        ⬅ Back
      </button>

      <div
        className="grid"
        style={{
          display: "grid",
          justifyContent: "center",
          margin: "30px auto",
          gridTemplateColumns: `repeat(${gridSize}, ${tileSize}px)`,
          gridTemplateRows: `repeat(${gridSize}, ${tileSize}px)`,
          gap: "2px",
        }}
      >
        {tiles.map((tile, index) => (
          <div
            key={index}
            className="tile"
            style={
              tile >= 0
                ? imageStyle(tile)
                : {
                    backgroundColor: "black",
                    border: "1px solid #333",
                  }
            }
            onClick={() => handleTileClick(index)}
          />
        ))}
      </div>

      {solved && <p className="success">🎉 You solved it in {moves} moves!</p>}
    </div>
  );
}

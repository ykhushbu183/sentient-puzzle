import React, { useState, useEffect } from 'react'
import { shuffleArray } from '../utils/shuffleArray'
import { checkSolution } from '../utils/checkSolution'
import Popup from './Popup'

export default function PuzzleBoard({ gridSize, images, onBack }) {
  const [tiles, setTiles] = useState([])
  const [moves, setMoves] = useState(0)
  const [solved, setSolved] = useState(false)

  useEffect(() => {
    const randomImage = images[Math.floor(Math.random() * images.length)]
    const parts = Array.from({ length: gridSize * gridSize }, (_, i) => i)
    const shuffled = shuffleArray(parts)
    setTiles(shuffled.map((n) => ({ id: n, img: randomImage })))
  }, [gridSize, images])

  const handleTileClick = (index) => {
    const newTiles = [...tiles]
    // simple tile swap logic for demo
    if (index > 0) [newTiles[index], newTiles[index - 1]] = [newTiles[index - 1], newTiles[index]]
    setTiles(newTiles)
    setMoves(moves + 1)

    const correct = tiles.map((_, i) => i)
    if (checkSolution(newTiles.map(t => t.id), correct)) setSolved(true)
  }

  return (
    <div className="puzzle-container">
      <h2>Moves: {moves}</h2>
      <button className="back-btn" onClick={onBack}>Back</button>

      <div className="puzzle-grid" style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>
        {tiles.map((tile, i) => (
          <div key={i} className="tile" onClick={() => handleTileClick(i)}>
            {tile.id + 1}
          </div>
        ))}
      </div>

      {solved && <Popup onClose={onBack} />}
    </div>
  )
}


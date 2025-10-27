import FallingLogos from "./components/FallingLogos"
import React, { useState } from 'react'
import LevelSelect from './components/LevelSelect'
import PuzzleBoard from './components/PuzzleBoard'
import { images } from './images'

export default function App() {
  const [level, setLevel] = useState(null)

  return (
    <div className="app">
      {!level ? (
        <LevelSelect onSelect={setLevel} />
      ) : (
        <PuzzleBoard gridSize={level} images={images} onBack={() => setLevel(null)} />
      )}
      <footer className="footer">made by <a href="https://x.com/sonuwork37" target="_blank" rel="noreferrer">@sonuwork37</a></footer>
    </div>
  )
}


import React from "react"
import FallingLogos from "./components/FallingLogos"
import LevelSelect from "./components/LevelSelect"
import PuzzleGame from "./components/PuzzleGame"
import "./App.css"

function App() {
  return (
    <div className="app">
      {/* Background me falling sentient logos */}
      <FallingLogos />

      {/* Game box ke andar sab kuch chalega */}
      <div className="game-box">
        <LevelSelect />
        <PuzzleGame />
      </div>
    </div>
  )
}

export default App

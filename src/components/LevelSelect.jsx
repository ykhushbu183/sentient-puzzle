import React from 'react'

export default function LevelSelect({ onSelect }) {
  return (
    <div className="level-select">
      <h1>Choose Difficulty</h1>
      <div className="buttons">
        <button onClick={() => onSelect(2)}>Simple (2x2)</button>
        <button onClick={() => onSelect(3)}>Intermediate (3x3)</button>
        <button onClick={() => onSelect(4)}>Hard (4x4)</button>
      </div>
    </div>
  )
}


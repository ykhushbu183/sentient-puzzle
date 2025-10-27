import React from 'react'

export default function Tile({ piece, onClick }) {
  return (
    <div
      className="tile"
      style={{ backgroundImage: `url(${piece.img})`, backgroundPosition: piece.pos }}
      onClick={onClick}
    />
  )
}


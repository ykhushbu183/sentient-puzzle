import React from 'react'

export default function Popup({ onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Congratulations!</h2>
        <p>You’ve unlocked the sentient challenge.</p>
        <button onClick={onClose}>Play Again</button>
      </div>
    </div>
  )
}


import React, { useEffect, useState } from "react"
import "./FallingLogos.css"

export default function FallingLogos() {
  const [logos, setLogos] = useState([])

  useEffect(() => {
    // create 6–7 logos with random positions and delays
    const generated = Array.from({ length: 7 }).map((_, i) => ({
      id: i,
      left: Math.random() * 90 + "vw", // random horizontal position
      size: Math.random() * 40 + 40, // 40px–80px size
      delay: Math.random() * 3 + "s", // delay between 0–3 sec
      duration: Math.random() * 5 + 5 + "s", // 5–10 sec fall
    }))
    setLogos(generated)
  }, [])

  return (
    <div className="falling-logo-container">
      {logos.map((logo) => (
        <img
          key={logo.id}
          src="/logo.png"
          alt="sentient"
          className="falling-logo"
          style={{
            left: logo.left,
            width: logo.size,
            height: logo.size,
            animationDelay: logo.delay,
            animationDuration: logo.duration,
          }}
        />
      ))}
    </div>
  )
}

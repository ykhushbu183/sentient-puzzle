import React, { useEffect, useState } from "react"

export default function FallingLogos() {
  const [logos, setLogos] = useState([])

  useEffect(() => {
    const generateLogos = () => {
      const newLogos = Array.from({ length: 7 }, (_, i) => ({
        id: i,
        left: Math.random() * 95 + "vw", // random horizontal pos
        size: 40 + Math.random() * 50, // 40–90px
        delay: Math.random() * 3 + "s", // 0–3s delay
        duration: 5 + Math.random() * 5 + "s", // 5–10s fall
        rotation: Math.random() * 360, // start rotation
      }))
      setLogos(newLogos)
    }

    generateLogos()
    const interval = setInterval(generateLogos, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {logos.map((logo) => (
        <img
          key={logo.id}
          src="/logo.png"
          alt="sentient logo"
          style={{
            position: "absolute",
            top: "-100px",
            left: logo.left,
            width: `${logo.size}px`,
            height: `${logo.size}px`,
            opacity: 0.8,
            animation: `fallRotate ${logo.duration} linear ${logo.delay} infinite`,
            transform: `rotate(${logo.rotation}deg)`,
          }}
        />
      ))}

      {/* inline keyframes (no CSS file needed) */}
      <style>{`
        @keyframes fallRotate {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.9;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

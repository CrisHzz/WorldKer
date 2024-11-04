import React from "react";

export default function BackgroundStars({
  backgroundColor = "black",
  gradients = [
    {
      from: "from-blue-700/50",
      to: "to-transparent",
      scale: 1.2,
      translateX: "0%",
      translateY: "0%",
    },
    {
      from: "from-blue-700/80",
      to: "to-transparent",
      scale: 1.5,
      translateX: "20%",
      translateY: "20%",
    },
    {
      from: "from-blue-700/30",
      to: "to-transparent",
      scale: 1.8,
      translateX: "-20%",
      translateY: "-20%",
    },
  ],
  opacity = 0.4,
}) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-${backgroundColor} z-0`}
    >
      <div className="absolute inset-0" style={{ opacity }}>
        {gradients.map((gradient, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-gradient-radial ${gradient.from} ${gradient.to}`}
            style={{
              transform: `translate(${gradient.translateX}, ${gradient.translateY}) scale(${gradient.scale})`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 min-h-screen">
        {/* Aquí va el contenido de tu página */}
      </div>
    </div>
  );
}

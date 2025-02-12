import React, { useEffect, useState } from "react";

interface Drip {
  id: number;
  x: number;
  y: number;
  color: string;
  delay: number;
}

const colors = [
  "drip-primary",
  "drip-violet",
  "drip-blue",
  "drip-green",
  "drip-orange",
  "drip-red",
  "drip-cyan",
  "drip-pink",
  "drip-yellow",
  "drip-purple",
];

const RainbowDrips = () => {
  const [drips, setDrips] = useState<Drip[]>([]);

  useEffect(() => {
    const createDrip = () => {
      const newDrip = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: -10, // Start slightly above the viewport
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.5,
      };

      setDrips((prev) => [...prev, newDrip]);

      // Remove drip after animation
      setTimeout(() => {
        setDrips((prev) => prev.filter((drip) => drip.id !== newDrip.id));
      }, 2000); // Match this with CSS animation duration
    };

    // Create initial drips
    for (let i = 0; i < 10; i++) {
      setTimeout(createDrip, i * 200);
    }

    // Continue creating drips
    const interval = setInterval(() => {
      if (Math.random() < 0.3) {
        // 30% chance to create a drip
        createDrip();
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {drips.map((drip) => (
        <div
          key={drip.id}
          className={`absolute paint-drip-cursor ${drip.color}`}
          style={{
            left: `${drip.x}px`,
            top: `${drip.y}px`,
            animationDelay: `${drip.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default RainbowDrips;

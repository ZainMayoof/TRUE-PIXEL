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
      // Create multiple drips at once
      const numDrips = Math.floor(Math.random() * 2) + 1; // 1-2 drips at a time
      
      for (let i = 0; i < numDrips; i++) {
        const newDrip = {
          id: Date.now() + i,
          x: Math.random() * window.innerWidth,
          y: -10,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 0.5,
        };

        setDrips((prev) => [...prev, newDrip]);

        setTimeout(() => {
          setDrips((prev) => prev.filter((drip) => drip.id !== newDrip.id));
        }, 2000);
      }
    };

    // Create initial drips
    for (let i = 0; i < 15; i++) {
      setTimeout(createDrip, i * 100);
    }

    // Continue creating drips more frequently
    const interval = setInterval(() => {
      if (Math.random() < 0.4) { // 40% chance to create drips
        createDrip();
      }
    }, 50);

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

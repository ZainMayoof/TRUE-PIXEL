import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const BrushCursor = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="cursor-brush"
  >
    <path
      d="M4 20L2 22M10 14L2 22M22 2L14 10M22 2L18 2M22 2L22 6"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 12C6 12 8 14 12 14C16 14 18 12 18 12C18 12 16 10 12 10C8 10 6 12 6 12Z"
      fill="white"
      fillOpacity="0.2"
    />
  </svg>
);

const ClickableBrushCursor = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="cursor-brush"
  >
    <path
      d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
      className="stroke-primary"
      strokeWidth="2"
    />
    <path
      d="M8 12L16 12M12 8L12 16"
      className="stroke-primary"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CustomCursor = () => {
  const [drips, setDrips] = useState<
    { id: number; x: number; y: number; color: string }[]
  >([]);
  const [isClickable, setIsClickable] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

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

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);

      // Check if the cursor is over a clickable element
      const target = e.target as HTMLElement;
      setIsClickable(
        target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") !== null ||
          target.closest("a") !== null ||
          target.closest('[role="button"]') !== null ||
          window.getComputedStyle(target).cursor === "pointer"
      );

      // Only create drips when not over clickable elements
      if (!isClickable && Math.random() < 0.2) {
        const numDrips = Math.floor(Math.random() * 3) + 1;

        for (let i = 0; i < numDrips; i++) {
          const offset = {
            x: (Math.random() - 0.5) * 10,
            y: (Math.random() - 0.5) * 10,
          };

          const newDrip = {
            id: Date.now() + i,
            x: e.clientX + offset.x,
            y: e.clientY + offset.y,
            color: colors[Math.floor(Math.random() * colors.length)],
          };

          setDrips((prev) => [...prev, newDrip]);

          const duration = 800 + Math.random() * 400;
          setTimeout(() => {
            setDrips((prev) => prev.filter((drip) => drip.id !== newDrip.id));
          }, duration);
        }
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isClickable]);

  return (
    <>
      <motion.div
        className={`custom-cursor ${isClickable ? "cursor-clickable" : ""}`}
        style={{
          x: springX,
          y: springY,
        }}
      >
        {isClickable ? <ClickableBrushCursor /> : <BrushCursor />}
      </motion.div>
      {drips.map((drip) => (
        <div
          key={drip.id}
          className={`paint-drip-cursor ${drip.color}`}
          style={{
            left: drip.x,
            top: drip.y,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;

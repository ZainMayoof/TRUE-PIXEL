import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingRobot = () => {
  const [isWaving, setIsWaving] = useState(false);
  const [message, setMessage] = useState("Hi! I'm here to help you");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = [
        { id: "hero", message: "Welcome to our AI journey!" },
        { id: "deepfake-game", message: "Try our Deepfake detection game!" },
        { id: "principles", message: "Learn about AI principles" },
        { id: "case-studies", message: "Explore real-world AI cases" },
      ];

      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setMessage(section.message);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const waveInterval = setInterval(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 2000);
    }, 8000);

    return () => clearInterval(waveInterval);
  }, []);

  // Calculate position based on scroll
  const calculatePosition = () => {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = scrollY / maxScroll;

    // Safe area margins (in pixels)
    const topMargin = 100;
    const bottomMargin = 100;
    const rightMargin = 32; // 2rem
    const leftMargin = 32; // 2rem

    // Start from top-right (high top, high right)
    // Move to bottom-left (low top, low right)
    const verticalRange = window.innerHeight - topMargin - bottomMargin - 160; // 160px accounts for robot height
    const horizontalRange = window.innerWidth - rightMargin - leftMargin - 128; // 128px is robot width

    const top = topMargin + scrollProgress * verticalRange;
    const right = rightMargin + scrollProgress * horizontalRange;

    return {
      top: `${top}px`,
      right: `${right}px`,
    };
  };

  const position = calculatePosition();

  return (
    <motion.div
      className="fixed z-50"
      style={{
        top: position.top,
        right: position.right,
      }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 15,
      }}
    >
      <AnimatePresence>
        <motion.div
          className="absolute -top-16 left-0 right-0 -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          {/* Modern Speech Bubble */}
          <div className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/20 max-w-[200px] mx-auto">
            <div className="relative text-gray-800 font-medium text-sm break-words">
              {message}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-l-transparent border-t-6 border-white/90 border-r-6 border-r-transparent" />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="relative w-32 h-40"
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Head */}
        <div className="absolute w-28 h-28 left-1/2 transform -translate-x-1/2">
          {/* Main Head Shape */}
          <div className="absolute w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-2xl shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />

            {/* Face Screen */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-14 bg-gray-900/90 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-cyan-500/10" />

              {/* Eyes */}
              <div className="flex justify-center items-center h-full space-x-4">
                <motion.div
                  className="relative w-4 h-4"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute inset-0 bg-cyan-400 rounded-md blur-sm" />
                  <div className="absolute inset-0 bg-cyan-300 rounded-md" />
                </motion.div>

                <motion.div
                  className="relative w-4 h-4"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                >
                  <div className="absolute inset-0 bg-cyan-400 rounded-md blur-sm" />
                  <div className="absolute inset-0 bg-cyan-300 rounded-md" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Antennas */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 flex space-x-8">
            <div className="relative">
              <motion.div
                className="w-3 h-3 bg-yellow-300 rounded-full shadow-lg"
                animate={{
                  boxShadow: [
                    "0 0 8px #fcd34d",
                    "0 0 12px #fcd34d",
                    "0 0 8px #fcd34d",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="w-1 h-4 bg-gradient-to-b from-blue-400 to-blue-600 mx-auto -mt-0.5 rounded-full" />
            </div>
            <div className="relative">
              <motion.div
                className="w-3 h-3 bg-yellow-300 rounded-full shadow-lg"
                animate={{
                  boxShadow: [
                    "0 0 8px #fcd34d",
                    "0 0 12px #fcd34d",
                    "0 0 8px #fcd34d",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <div className="w-1 h-4 bg-gradient-to-b from-blue-400 to-blue-600 mx-auto -mt-0.5 rounded-full" />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-16">
          <div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-xl shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl" />

            {/* Display */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-10 bg-gray-900/90 rounded-lg overflow-hidden backdrop-blur-sm border border-gray-700">
              <motion.div
                className="w-12 h-8 mx-auto mt-1"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="w-full h-0.5 bg-cyan-400 rounded-full mb-1.5"
                  animate={{
                    scaleX: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="w-full h-0.5 bg-cyan-400 rounded-full mb-1.5"
                  animate={{
                    scaleX: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Arms */}
        <motion.div
          className="absolute left-3 top-24 w-3 h-12"
          animate={{
            rotate: isWaving ? [-45, 0] : 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-full shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
          </div>
          <div className="absolute -bottom-1.5 left-0 w-3 h-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
          </div>
        </motion.div>

        <div className="absolute right-3 top-24 w-3 h-12">
          <div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-full shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
          </div>
          <div className="absolute -bottom-1.5 left-0 w-3 h-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
          </div>
        </div>

        {/* Feet */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-6 h-4 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg" />
          </div>
          <div className="w-6 h-4 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingRobot;

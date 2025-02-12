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
        { id: "hero", message: "Welcome to AI journey!" },
        { id: "deepfake-game", message: "Try Deepfake Game!" },
        { id: "principles", message: "Learn about AI principles" },
        { id: "case-studies", message: "Explore AI cases" },
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
            // Trigger waving when showing welcome message
            if (section.id === "hero") {
              setTimeout(() => setIsWaving(true), 2000);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initial wave when component mounts
  useEffect(() => {
    setTimeout(() => setIsWaving(true), 2000);
  }, []);

  // Periodic waving only when in hero section
  useEffect(() => {
    if (message === "Welcome to AI journey!") {
      const waveInterval = setInterval(() => {
        setTimeout(() => setIsWaving(true), 2000);
      }, 8000);

      return () => clearInterval(waveInterval);
    }
  }, [message]);

  // Calculate position based on scroll
  const calculatePosition = () => {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = scrollY / maxScroll;

    // Safe area margins (in pixels)
    const topMargin = 100;
    const bottomMargin = 100;
    const rightMargin = 32; // 2rem

    const verticalRange = window.innerHeight - topMargin - bottomMargin - 160; // 160px accounts for robot height

    // Only vertical movement
    const verticalProgress = easeInOutQuad(scrollProgress);
    const top = topMargin + verticalProgress * verticalRange;

    // Keep fixed horizontal position at right margin
    const right = rightMargin;

    return {
      top: `${top}px`,
      right: `${right}px`,
    };
  };

  // Easing function for smoother movement
  const easeInOutQuad = (t: number): number => {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
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
          <div className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md p-2 rounded-xl shadow-lg border border-white/20 max-w-[180px] mx-auto">
            <div className="relative text-gray-800 font-medium text-xs break-words">
              {message}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-t-4 border-white/90 border-r-4 border-r-transparent" />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="relative w-24 h-32"
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Head */}
        <div className="absolute w-20 h-20 left-1/2 transform -translate-x-1/2">
          {/* Main Head Shape */}
          <div className="absolute w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-2xl shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />

            {/* Face Screen */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-10 bg-gray-900/90 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-cyan-500/10" />

              {/* Eyes */}
              <div className="flex justify-center items-center h-full space-x-3">
                <motion.div
                  className="relative w-3 h-3"
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
                  className="relative w-3 h-3"
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
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-12">
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

        {/* Left Arm (Conditional Waving) */}
        <motion.div
          className="absolute left-2 top-20 w-2 h-10"
          initial={{ rotate: 0 }}
          animate={{
            rotate: message === "Welcome to AI journey!" 
              ? [-120, -230, -120] // Enthusiastic upward wave for welcome
              : 0,   // Changed from -45 to 0 for straight position
          }}
          transition={{
            duration: 1.2,
            repeat: message === "Welcome to AI journey!" ? Infinity : 0,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
          style={{
            transformOrigin: "top",
            originX: 0.5,
            originY: 0,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-full shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
          </div>
          <div className="absolute -bottom-1.5 left-0 w-2 h-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
          </div>
        </motion.div>

        {/* Right Arm (Static) */}
        <div className="absolute right-2 top-20 w-2 h-10">
          <div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-full shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
          </div>
          <div className="absolute -bottom-1.5 left-0 w-2 h-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
          </div>
        </div>

        {/* Feet */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
          <div className="w-4 h-3 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg" />
          </div>
          <div className="w-4 h-3 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingRobot;

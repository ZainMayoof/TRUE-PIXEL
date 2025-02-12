import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const FloatingRobot = () => {
  const [isWaving, setIsWaving] = useState(false);
  const [message, setMessage] = useState("Hello! How can I help you?");
  const { scrollYProgress } = useScroll();

  // Messages for different scroll positions
  const scrollMessages = [
    "Hello! How can I help you?",
    "You're in the middle section!",
    "Almost at the bottom!",
  ];

  // Update message based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.3) {
        setMessage(scrollMessages[0]);
      } else if (latest < 0.7) {
        setMessage(scrollMessages[1]);
      } else {
        setMessage(scrollMessages[2]);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    const waveInterval = setInterval(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 2000);
    }, 8000);

    return () => clearInterval(waveInterval);
  }, []);

  return (
    <motion.div
      className="fixed right-8 z-50"
      animate={{
        bottom:
          scrollYProgress.get() < 0.3
            ? 32 // 8rem
            : scrollYProgress.get() < 0.7
            ? "50%"
            : 96, // 24rem
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      {/* Speech Bubble */}
      <motion.div
        className="absolute -top-20 right-0 bg-white p-4 rounded-2xl shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative text-gray-800 font-medium">
          {message}
          <div className="absolute -bottom-8 right-8 w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-white border-r-8 border-r-transparent" />
        </div>
      </motion.div>

      <motion.div
        className="relative w-40 h-48"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Main Head */}
        <div className="absolute w-32 h-32 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full left-1/2 transform -translate-x-1/2">
          {/* Face Screen */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-16 bg-gray-900 rounded-2xl overflow-hidden">
            {/* Eyes */}
            <div className="flex justify-center items-center h-full space-x-6">
              <motion.div
                className="w-6 h-6 bg-cyan-400 rounded-lg"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="w-6 h-6 bg-cyan-400 rounded-lg"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>

          {/* Antennas */}
          <div className="absolute -top-4 left-6">
            <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-lg" />
            <div className="w-1.5 h-5 bg-sky-500 mx-auto -mt-1" />
          </div>
          <div className="absolute -top-4 right-6">
            <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-lg" />
            <div className="w-1.5 h-5 bg-sky-500 mx-auto -mt-1" />
          </div>
        </div>

        {/* Body */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-20">
          <div className="w-full h-full bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl">
            {/* Display Panel */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-10 bg-gray-900 rounded-lg">
              <motion.div
                className="w-12 h-6 mx-auto mt-2"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-full h-0.5 bg-cyan-400 mb-1.5" />
                <div className="w-full h-0.5 bg-cyan-400 mb-1.5" />
                <div className="w-8 h-0.5 bg-cyan-400" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Arms */}
        <motion.div
          className="absolute left-2 top-24 w-5 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full origin-top"
          animate={{
            rotate: isWaving ? [-45, 0] : 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <div className="absolute -bottom-1 left-0 w-5 h-5 bg-sky-600 rounded-full" />
        </motion.div>
        <div className="absolute right-2 top-24 w-5 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full">
          <div className="absolute -bottom-1 left-0 w-5 h-5 bg-sky-600 rounded-full" />
        </div>

        {/* Feet */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-3">
          <div className="w-8 h-6 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl" />
          <div className="w-8 h-6 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingRobot;

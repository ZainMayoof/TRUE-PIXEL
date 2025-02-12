import React from "react";
import NavigationBar from "@/components/NavigationBar";
import Hero from "@/components/Hero";
import DeepfakeGame from "@/components/DeepfakeGame";
import Footer from "@/components/Footer";
import FloatingRobot from "@/components/FloatingRobot";
import RainbowDrips from "@/components/RainbowDrips";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <RainbowDrips />
      <NavigationBar />
      <main className="relative">
        <section id="hero" className="min-h-[100vh]">
          <Hero />
        </section>
        <section id="deepfake-game" className="min-h-[100vh]">
          <DeepfakeGame />
        </section>
        <FloatingRobot />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

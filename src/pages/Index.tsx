import React from "react";
import NavigationBar from "@/components/NavigationBar";
import Hero from "@/components/Hero";
import DeepfakeGame from "@/components/DeepfakeGame";
import PrinciplesSection from "@/components/PrinciplesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import Footer from "@/components/Footer";
import FloatingRobot from "@/components/FloatingRobot";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="relative">
        <section id="hero" className="min-h-[100vh]">
          <Hero />
        </section>
        <section id="deepfake-game" className="min-h-[100vh]">
          <DeepfakeGame />
        </section>
        <section id="principles" className="min-h-[100vh]">
          <PrinciplesSection />
        </section>
        <section id="case-studies" className="min-h-[100vh]">
          <CaseStudiesSection />
        </section>
        <FloatingRobot />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
